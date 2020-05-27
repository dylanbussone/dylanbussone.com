import React from 'react';
import Head from 'next/head';
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Header from '../components/header';
import Hero from '../components/hero';
import Arrow from '../components/arrow';
import SocialLinks from '../components/social-links';
import { scrollToElement } from '../utils';

const Section = styled.section`
  text-align: center;
  overflow: hidden;
  padding: 0 1rem;

  ${p =>
    p.bg &&
    css`
      background: ${p.bg};
    `}

  ${p => p.theme.mediaMax.sm`
    padding-top: 0;
  `}

  h1 {
    font-size: 40px;
    font-weight: normal;
    text-shadow: 0 0 6px #000;
  }
`;

const MediaContent = styled.div`
  max-width: ${p => p.theme.breakpoints.md};
  margin: 3rem auto;

  > iframe {
    box-shadow: 0 0 10px black;
    max-width: 100%;
    max-height: 50vh;
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 49%;

  ${p => p.theme.mediaMax.sm`
    display: none;
  `}
`;

const FooterImage = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 8px;
  margin: 1rem auto 2rem;
  background-image: url('/muffin.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Home = () => {
  const [heroRef, isHeroFullyInView] = useInView({ threshold: 0.8 });

  return (
    <div>
      <Head>
        <title>Dylonious</title>
      </Head>

      <Header isHeroFullyInView={isHeroFullyInView} />

      <Hero ref={heroRef}>
        <ArrowWrapper>
          <Arrow
            size="8px"
            onClick={() => {
              scrollToElement('#listen');
            }}
          />
        </ArrowWrapper>
      </Hero>

      <main>
        <Section id="listen" bg="#111">
          <h1>Listen</h1>

          <MediaContent>
            <iframe
              src="https://www.youtube.com/embed/LSiFCyeKhWE"
              title="Youtube"
              width="850"
              height="500"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </MediaContent>

          <MediaContent>
            <iframe
              src="https://open.spotify.com/embed/artist/1Op9vSnBgavICOjzdFpM3X"
              title="Spotify"
              width="450"
              height="400"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </MediaContent>
        </Section>

        <Section id="follow" bg="#000">
          <h1>Follow</h1>
          <SocialLinks />
          {/* TODO: mailing list */}

          <FooterImage />
        </Section>
      </main>
    </div>
  );
};

export default Home;
