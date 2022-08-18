import { ApolloClient, InMemoryCache } from '@apollo/client';
import innerText from 'innertext';

export const API_URL = 'http://wp.redlionandcompany.com/graphql';

export const appoloClient = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
});

export const mapResults = (data) =>
  data?.posts?.edges?.map(({ node }) => ({
    ...node,
    date: new Date(node?.date),
    description: innerText(node?.content),
    image: node?.featuredImage?.node?.sourceUrl,
    imageAlt: node?.featuredImage?.node?.altText
  })) || [];

export const mapResultsSsr = ({ data }) =>
  data?.posts?.edges?.map(({ node }) => ({
    ...node,
    description: innerText(node?.content),
    image: node?.featuredImage?.node?.sourceUrl || null,
    imageAlt: node?.featuredImage?.node?.altText || null
  })) || [];
