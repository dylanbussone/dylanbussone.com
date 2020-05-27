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
    fill: ${p => p.theme.colors.primary};
    height: ${p => p.height || SOCIAL_ICON_SIZE}px;
  }
  svg path {
    fill: ${p => p.theme.colors.primary};
  }
`;

const SocialLinks = () => (
  <Wrapper>
    {SOCIAL_LINKS.map(({ name, link, icon, heightMultiplyer }) => (
      <a href={link} target="_blank" rel="noopener noreferrer" key={name}>
        <SocialLinkIcon title={name} height={SOCIAL_ICON_SIZE * heightMultiplyer}>
          {icon}
        </SocialLinkIcon>
      </a>
    ))}
  </Wrapper>
);

export default SocialLinks;
