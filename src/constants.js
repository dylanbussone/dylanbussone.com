import React from 'react';
import SoundcloudIcon from './images/soundcloud.svg';
import YoutubeIcon from './images/youtube.svg';
import InstagramIcon from './images/instagram.svg';
import SpotifyIcon from './images/spotify.svg';

const SOCIAL_LINKS = [
  {
    name: 'Spotify',
    link: 'https://open.spotify.com/artist/1Op9vSnBgavICOjzdFpM3X?si=fJVryOLfRxSa4fLcXasy_g',
    icon: <SpotifyIcon />,
    heightMultiplyer: 0.95,
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/user/dbuss1music',
    icon: <YoutubeIcon />,
    heightMultiplyer: 1.2,
  },
  {
    name: 'Soundcloud',
    link: 'https://soundcloud.com/dylanbussone',
    icon: <SoundcloudIcon />,
    heightMultiplyer: 1.5,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/dylanbussone/',
    icon: <InstagramIcon />,
    heightMultiplyer: 1,
  },
];

export { SOCIAL_LINKS };
