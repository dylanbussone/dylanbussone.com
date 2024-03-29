import React from 'react';
import SoundcloudIcon from './images/soundcloud.svg';
import YoutubeIcon from './images/youtube.svg';
// import InstagramIcon from './images/instagram.svg';
import SpotifyIcon from './images/spotify.svg';
import BandcampIcon from './images/bandcamp.svg';

const SOCIAL_LINKS = [
  {
    name: 'Spotify',
    link: 'https://open.spotify.com/artist/1Op9vSnBgavICOjzdFpM3X?si=fJVryOLfRxSa4fLcXasy_g',
    icon: <SpotifyIcon />,
    heightMultiplyer: 0.95,
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/@dylonious',
    icon: <YoutubeIcon />,
    heightMultiplyer: 1.2,
  },
  {
    name: 'Bandcamp',
    link: 'https://dylanbussone.bandcamp.com/',
    icon: <BandcampIcon />,
    heightMultiplyer: 0.8,
    useSVGColors: true,
  },
  {
    name: 'Soundcloud',
    link: 'https://soundcloud.com/dylanbussone',
    icon: <SoundcloudIcon />,
    heightMultiplyer: 1.5,
  },
  // {
  //   name: 'Instagram',
  //   link: 'https://www.instagram.com/dylanbussone/',
  //   icon: <InstagramIcon />,
  //   heightMultiplyer: 1,
  // },
];

export { SOCIAL_LINKS };
