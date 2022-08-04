import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '@styles/globalStyle';
import '@public/css/typography.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment >
  );
}

export default MyApp;
