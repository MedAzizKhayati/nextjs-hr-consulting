import { gql } from '@apollo/client';

export const GET_INSTRUCTORS = gql`
  query GetInstructors {
    posts(where: { categoryName: "instructors" }) {
      edges {
        node {
          id
          title
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


