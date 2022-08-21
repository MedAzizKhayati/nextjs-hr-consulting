import { gql } from "@apollo/client";

export const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    posts(where: { categoryName: "testimonials" }, first: 6) {
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
          testimonial {
            fieldGroupName
            fullName
            occupation
            rating
          }
        }
      }
    }
  }
`;
