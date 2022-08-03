// gql services and manipulations
// e.g query pages 
import { gql } from '@apollo/client';

// services 
import { ExecuteQuery } from '../apollo/apollo.service';
import { SlugList } from './screen.request';

// query 
import QUERY_SCREEN_SLUGS from './query/screen.slug.gql';


export const QueryScreenSlugs = async () => {
    const query = gql`${QUERY_SCREEN_SLUGS}`;
    const data = await ExecuteQuery(query);
    return SlugList(data.screenCollection.items);
}

const QueryScreenPage = async (slug: string, preview?: boolean) => {

}