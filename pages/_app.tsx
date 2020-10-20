import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import MockingWorker from '@/components/MockingWorker';
import { isDev } from '@/constants';
import useApollo from '@/hooks/useApollo';
import GlobalStyle from '@/styles/global.ts';
import { theme } from '@/styles/theme';
import { ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  const Wrapper = isDev ? MockingWorker : React.Fragment;
  
  return (
    <Wrapper>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </Wrapper>
  );
}
