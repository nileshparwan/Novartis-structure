import { IncomingMessage, ServerResponse } from 'http';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from "@apollo/client/link/retry";
import {
  from,
  HttpLink,
  ApolloClient,
  DocumentNode,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

// internal imports
import config from '../../config/config.json';

// variables
const authorization = config.Contentful.main.Authorization;

export type ResolverContext = {
  req?: IncomingMessage
  res?: ServerResponse
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
});

//Delay of retry on error
const RetryDelay = (operation: any) => {
  console.log("RetryDelay = " + JSON.stringify(operation));
  console.log("RetryDelay operation.getContext() = " + operation.getContext());
  const { response } = operation.getContext();
  //check if contentful send the delay
  let delay = response && response.headers && response.headers.get('X-contentful-RateLimit-Reset');
  if (delay) {
    console.warn("contentful error : too many request")
    return delay
  } else {
    //connection error
    return (Math.random() * 3) + 1;
  }
};

const Retry = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => {
      //Incorrect request
      if (error) {
        console.log("ERROR RETRYIF", JSON.stringify(error))
        if (error.statusCode === 400) {
          return false;
        }
      }
      const retryValue = RetryDelay(_operation);
      return !!error && retryValue;
    }
  }
});


const Http = new HttpLink({
  uri: operation => operation.getContext().shared
    ? config.Contentful.main.DeliveryURL
    : config.Contentful.main.DeliveryURL + "/environments/" + config.Contentful.main.environment,
  headers: {
    authorization: `Bearer ${authorization}`,
    'Content-Language': `${config.locale}`,
  },
  credentials: 'same-origin',
});


export function CreateApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([errorLink, Retry, Http]),
    cache: new InMemoryCache()
  })
};


export const ExecuteQuery = async (query: DocumentNode, variables?: any, isShared?: boolean) => {
  const client = CreateApolloClient();
  const result = await client.query({ query: query, errorPolicy: "all", fetchPolicy: 'no-cache', variables, context: { shared: isShared } }); 
  return result?.data; 
};