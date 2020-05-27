import React from 'react';
import NextApp from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    color: ${p => p.theme.colors.primary};
    margin: 0;
    font-family: ${p => p.theme.font.default};
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
