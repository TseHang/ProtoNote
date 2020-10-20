import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import useApollo from '@/hooks/useApollo';
import useMockingWorker from '@/hooks/useMockingWorker';
import GlobalStyle from '@/styles/global.ts';
import { theme } from '@/styles/theme';
import { ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = useMockingWorker();
  const apolloClient = useApollo(pageProps.initialApolloState);

  if (loading) {
    return <div>Loading</div>;
  }

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
