import React from 'react';
import { bool, func, string } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen, menuColor }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} menuColor={menuColor}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
  menuColor: string.isRequired
};

export default Burger;