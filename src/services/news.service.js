import { gql } from '@apollo/client';

export const GET_NEWS = gql`
  query GetNews {
    posts(where: { categoryName: "news" }, first: 6) {
      edges {
        node {
          id
          slug
          title
          content
          date
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
