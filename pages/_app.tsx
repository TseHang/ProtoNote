import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import MockingWorker from '@/components/MockingWorker';
import { ColorMode } from '@/constants';
import { globalConfigVar } from '@/gql/globalConfigCache';
import useApollo from '@/hooks/useApollo';
import GlobalStyle from '@/styles/global.ts';
import { darkTheme, theme } from '@/styles/theme';
import { ApolloProvider, useReactiveVar } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { colorMode } = useReactiveVar(globalConfigVar);

  return (
    // need to change wrapper when production
    <MockingWorker>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider
          theme={colorMode === ColorMode.Light ? theme : darkTheme}
        >
          <GlobalStyle colorMode={colorMode} />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </MockingWorker>
  );
}
