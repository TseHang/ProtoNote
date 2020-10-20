import { useMemo } from 'react';

import { isServer } from '@/constants';
import { createApolloClient }from '@/utils/apolloClient';
import { ApolloClient } from "@apollo/client";

let apolloClient: ApolloClient<any>;

export function initializeApollo(initialState?: any) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (isServer) {
    return _apolloClient;
  }
  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
}

export default function useApollo(initialState?: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
