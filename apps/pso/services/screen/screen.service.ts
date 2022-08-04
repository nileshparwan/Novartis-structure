// gql services and manipulations
// e.g query pages 
import { gql } from '@apollo/client';

// services 
import { ExecuteQuery } from '../apollo/apollo.service';
import { SlugList, IslugList } from './screen.request';

// query 
import QUERY_SCREEN_SLUGS from './query/screen.slug.gql';
import QUERY_SCREEN_PAGE from './query/screenpage.gql';


export const QueryScreenSlugs = async (): Promise<Array<IslugList>> => {
    const query = gql`${QUERY_SCREEN_SLUGS}`;
    const data = await ExecuteQuery(query);
    return SlugList(data.screenCollection.items);
}

export const QueryScreenPage = async (slug: string) => {
    const query = gql`${QUERY_SCREEN_PAGE}`;
    const data = await ExecuteQuery(query, { slug });
    return data.screenCollection.items[0];
}