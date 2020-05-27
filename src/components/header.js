import React from 'react';
import styled, { css } from 'styled-components';
import { scrollToElement } from '../utils';

export const NAV_HEIGHT = 66;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${NAV_HEIGHT}px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
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

const List = styled.ul`
  margin: 0 2rem;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;

  ${p => p.theme.mediaMax.sm`
    justify-content: center;
    width: 100%;
  `}
`;

const HeaderLink = styled.a`
  font-size: 16px;
  color: ${p => p.theme.colors.primary};
  transition: color 0.1s ease;
  cursor: pointer;
  letter-spacing: 1px;
  text-decoration: none;
  display: inline-block;
  margin-right: 2.2rem;
  white-space: nowrap;

  &:hover {
    color: ${p => p.theme.colors.secondary};
  }

  ${p => p.theme.mediaMax.sm`
    display: none;
  `}
`;

const Logo = styled.a`
  margin-right: 4rem;
  font-family: ${p => p.theme.font.logo};
  font-size: 36px;
  text-shadow: 0 0 4px #000;
  white-space: nowrap;
  color: ${p => p.theme.colors.primary};
  text-decoration: none;

  ${p => p.theme.mediaMax.sm`
    margin-right: 0;
  `}
`;

export default ({ isHeroFullyInView }) => (
  <Header isHeroFullyInView={isHeroFullyInView}>
    <List>
      <li>
        <Logo href="#">Dylonious</Logo>
      </li>
      <li>
        <HeaderLink
          onClick={() => {
            scrollToElement('#listen');
          }}
        >
          Listen
        </HeaderLink>
      </li>
      <li>
        <HeaderLink
          onClick={() => {
            scrollToElement('#follow');
          }}
        >
          Follow
        </HeaderLink>
      </li>
    </List>
  </Header>
);
