import React from 'react';
import { bool } from 'prop-types';
import { StyledHome } from './Home.styled'

const Home = ({ open }) => {
  return (
    <StyledHome open={open}>
      <h1>ELIZABETH FORTANELY — SOFTWARE ENGINEER — AUSTIN, TX</h1>
    </StyledHome>
  );
}

Home.propTypes = {
  open: bool.isRequired,
}

export default Home;
