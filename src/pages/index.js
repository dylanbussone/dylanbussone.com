import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Header, { NAV_HEIGHT } from '../components/header';
import Hero from '../components/hero';
import Arrow from '../components/arrow';
import SocialLinks from '../components/social-links';
import { scrollToElement } from '../utils';
import { SOUNDCLOUD_IDS, YOUTUBE_IDS } from '../constants';

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
`;

const MediaContent = styled.div`
  margin: 3rem auto;

  > iframe {
    box-shadow: 0 0 10px black;
    max-width: 100%;
  }

  ${p =>
    p.big
      ? `
    max-width: 100%:
    width: 100%;
    height: calc(100vh - ${NAV_HEIGHT}px);
  `
      : `
  max-width: ${p => p.theme.breakpoints.md};
    > iframe {
      max-height: 50vh;
    }
  `}
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
  height: 300px;
  width: 300px;
  border-radius: 8px;
  margin: 1rem auto 2rem;
  background-image: url('/muffin.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Home = () => {
  const [randomSoundcloudId, setRandomSoundcloudId] = useState();
  const [randomYoutubeId, setRandomYoutubeId] = useState();
  const [heroRef, isHeroFullyInView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    setRandomSoundcloudId(SOUNDCLOUD_IDS[Math.floor(Math.random() * SOUNDCLOUD_IDS.length)]);
    setRandomYoutubeId(YOUTUBE_IDS[Math.floor(Math.random() * YOUTUBE_IDS.length)]);
  }, []);

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
          <MediaContent big>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${randomYoutubeId}?autoplay=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </MediaContent>

          <MediaContent>
            <iframe
              width="850"
              height="300"
              scrolling="no"
              frameBorder="0"
              src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${randomSoundcloudId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
            />
          </MediaContent>

          <MediaContent>
            <iframe
              src="https://open.spotify.com/embed/artist/1Op9vSnBgavICOjzdFpM3X"
              title="Spotify"
              width="850"
              height="400"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </MediaContent>
        </Section>

        <Section id="follow" bg="#000">
          <SocialLinks />
          {/* TODO: mailing list */}

          <FooterImage />
        </Section>
      </main>
    </div>
  );
};

export default Home;
