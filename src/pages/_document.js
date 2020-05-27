import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Monoton|Montserrat&display=swap"
            rel="stylesheet"
          />
          <meta property="og:title" content="Dylonious music" />
          <meta property="og:description" content="Official Website for Dylonious" />
          {/* <meta property="og:image" content="https://spicetigermusic.com/spicetiger.jpg" />
          <meta property="og:url" content="https://spicetigermusic.com/" /> */}
          <meta property="og:site_name" content="Dylonious music" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
