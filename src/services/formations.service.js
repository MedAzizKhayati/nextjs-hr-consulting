import { gql } from '@apollo/client';

export const GET_FORMATIONS = gql`
  query GetFormations {
    posts(where: { categoryName: "formations" }) {
      edges {
        node {
          id
          slug
          title
          content
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


