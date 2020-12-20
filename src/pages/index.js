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
`;

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 49%;

  ${p => p.theme.mediaMax.sm`
    display: none;
  `}
`;

const MediaContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 0;
`;

const MediaFrame = styled.iframe`
  flex: calc(50% - 3rem);
  margin: 1.5rem;
  box-shadow: 0 0 10px black;
  height: ${p => p.height || '300px'};

  ${p => p.theme.mediaMax.sm`
    flex: 100%;
  `}
`;

const FooterText = styled.h2`
  margin: 2rem 0 1rem;
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
          <MediaContent>
            <MediaFrame
              src="https://open.spotify.com/embed/artist/1Op9vSnBgavICOjzdFpM3X"
              title="Spotify"
              height="400"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />

            <MediaFrame
              src="https://bandcamp.com/EmbeddedPlayer/album=377700918/size=large/bgcol=333333/linkcol=0f91ff/tracklist=true/artwork=small/transparent=true/"
              title="Bandcamp"
              height="400"
              frameBorder="0"
              seamless
            >
              <a href="https://dylonious.bandcamp.com/album/summer-hustle">Dylonious</a>
            </MediaFrame>

            <MediaFrame
              src="https://www.youtube.com/embed/LSiFCyeKhWE?autoplay=0"
              height="400"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <MediaFrame
              src="https://www.youtube.com/embed/MB9zgDACMLw?autoplay=0"
              height="400"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <MediaFrame
              scrolling="no"
              height="250"
              frameBorder="0"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/376395188&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />

            <MediaFrame
              scrolling="no"
              height="250"
              frameBorder="0"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/202708367&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </MediaContent>
        </Section>

        <Section bg="#090909">
          <FooterText>Follow</FooterText>
          <SocialLinks />
          <FooterImage />
        </Section>
      </main>
    </div>
  );
};

export default Home;
