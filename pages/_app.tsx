import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/global.ts';
import { theme } from '@/styles/theme';
import { useApollo } from '@/utils/apolloClient';
import { ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
