import React, { useState, useEffect } from 'react';
import { bool } from 'prop-types';
import { StyledHome } from './Home.styled'
import backgroundImage from '../../assets/background.jpg';

const Home = ({ open, width }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;

    img.onload = () => {
      setImageLoaded(true);
    }
  }, []);

  return (
    <StyledHome className={`home${ imageLoaded ? ' image-loaded' : ''}`} open={open} width={width} img={backgroundImage}>
      <h1>ELIZABETH FORTANELY — SOFTWARE ENGINEER — AUSTIN, TX</h1>
    </StyledHome>
  );
}

Home.propTypes = {
  open: bool.isRequired,
}

export default Home;
