import React from 'react';
import styled, { css } from 'styled-components';
import SocialLinks from './social-links';

export const NAV_HEIGHT = 66;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${NAV_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: right;
  border-bottom: 1px solid #333;
  padding: 0 2rem;
  z-index: 2;
  background: rgba(34, 34, 34, 1);
  transition: background 0.5s ease;

  ${p =>
    p.isHeroFullyInView &&
    css`
      background: rgba(34, 34, 34, 0.2);
      border: none;
    `}

  ${p => p.theme.mediaMax.sm`
    position: absolute;
    border: none;
  `}
`;

export default ({ isHeroFullyInView }) => (
  <Header isHeroFullyInView={isHeroFullyInView}>
    <SocialLinks />
  </Header>
);
