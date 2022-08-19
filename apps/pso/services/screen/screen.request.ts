// static functions
// e.g component props 


export interface IslugList {
    params: {
        slug: string;
    }
}
export const SlugList = (slugs: Array<{ slug: string }>): Array<IslugList> => {
    return slugs.map(({ slug }) => ({ params: { slug } }));
}