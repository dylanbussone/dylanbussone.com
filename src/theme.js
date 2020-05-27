import { css } from 'styled-components';

const font = {
  default: 'Montserrat, sans-serif',
  logo: '"Press Start 2P", sans-serif',
};

const colors = {
  primary: '#f5f5f5',
  secondary: '#999',
  dark: '#444',
};

const breakpoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
};

const media = type =>
  Object.keys(breakpoints).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
    @media (${type}-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;
    return accumulator;
  }, {});

export default {
  font,
  colors,
  breakpoints,
  mediaMin: media('min'),
  mediaMax: media('max'),
};
