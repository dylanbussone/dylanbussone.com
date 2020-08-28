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
  justify-content: space-between;
  border-bottom: 1px solid #333;
  padding: 0 1rem;
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

const Logo = styled.a`
  margin-right: 4rem;
  font-family: ${p => p.theme.font.logo};
  font-size: 24px;
  letter-spacing: 8px;
  text-shadow: 0 0 4px #000;
  white-space: nowrap;
  color: ${p => p.theme.colors.primary};
  text-decoration: none;
  vertical-align: middle;

  opacity: 0.7;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }

  ${p => p.theme.mediaMax.sm`
    display: none;
  `}
`;

export default ({ isHeroFullyInView }) => (
  <Header isHeroFullyInView={isHeroFullyInView}>
    <Logo href="#">DYLONIOUS</Logo>
    <SocialLinks />
  </Header>
);
