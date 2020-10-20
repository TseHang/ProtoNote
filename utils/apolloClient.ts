import { isServer } from '@/constants';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: isServer,
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'http://localhost:3000/graphql',
      // Use explicit `window.fetch` so tha outgoing requests
      // are captured and deferred until the Service Worker is ready.
      // @ts-ignore
      fetch: (...args) => fetch(...args),
    })
  });
}
