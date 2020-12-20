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
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-54162808-2" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-54162808-2');
                `,
            }}
          />

          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Monoton|Montserrat|Press+Start+2P&display=swap"
            rel="stylesheet"
          />
          <meta property="og:title" content="Dylonious music" />
          <meta property="og:description" content="Official Website for Dylonious, Dylan Bussone" />
          {/* <meta property="og:image" content="https://dylonious.com/muffin.jpg" />
          <meta property="og:url" content="https://dylonious.com/" /> */}
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
