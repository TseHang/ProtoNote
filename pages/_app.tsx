import '@/styles/global.css';

import { AppProps } from 'next/app';
import React from 'react';

import { useApollo } from '@/utils/apolloClient';
import { ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
