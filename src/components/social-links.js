import React from 'react';
import styled from 'styled-components';
import { SOCIAL_LINKS } from '../constants';

const SOCIAL_ICON_SIZE = 40;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialLinkIcon = styled.span`
  padding: 0 0.5rem;

  svg {
    height: ${p => p.height || SOCIAL_ICON_SIZE}px;
  }

  ${p =>
    !p.useSVGColors &&
    `
  svg {
    fill: ${p.theme.colors.primary};
  }
  svg path {
    fill: ${p.theme.colors.primary};
  }
  `}
`;

const SocialLinks = () => (
  <Wrapper>
    {SOCIAL_LINKS.map(({ name, link, icon, heightMultiplyer, useSVGColors }) => (
      <a href={link} target="_blank" rel="noopener noreferrer" key={name}>
        <SocialLinkIcon
          title={name}
          height={SOCIAL_ICON_SIZE * heightMultiplyer}
          useSVGColors={useSVGColors}
        >
          {icon}
        </SocialLinkIcon>
      </a>
    ))}
  </Wrapper>
);

export default SocialLinks;
