import styled from 'styled-components';

const TigerHero = styled.div`
  background-image: url('/spicetiger.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;

  ${p => p.theme.mediaMax.sm`
    height: 66vh;
  `}
`;

export default TigerHero;
