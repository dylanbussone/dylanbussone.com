import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledArrow = styled.i`
  border: solid ${p => p.color || p.theme.colors.primary};
  border-width: 0 ${p => p.size} ${p => p.size} 0;
  display: inline-block;
  padding: ${p => p.size};
  cursor: pointer;

  opacity: 0.7;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }

  ${p =>
    p.direction === 'down' &&
    css`
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    `}

  ${p =>
    p.direction === 'up' &&
    css`
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    `}

  ${p =>
    p.direction === 'left' &&
    css`
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    `}

  ${p =>
    p.direction === 'right' &&
    css`
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    `}
`;

const Arrow = ({ direction = 'down', size = '3px', color, onClick }) => (
  <StyledArrow direction={direction} size={size} color={color} onClick={onClick} />
);

Arrow.propTypes = {
  direction: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Arrow;
