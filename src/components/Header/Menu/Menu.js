import React from 'react';
import { bool, string } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, menuColor, hoverColor }) => {
  return (
    <StyledMenu open={open} menuColor={menuColor} hoverColor={hoverColor}>
      <ul>
      <li>
          <a href="/about">
            <span role="img" aria-label="about"/>
            About
          </a>
        </li>
        <li>
          <a href="/work">
            <span role="img" aria-label="work"/>
            Work
          </a>
        </li>
        <li>
          <a href="/projects">
            <span role="img" aria-label="projects"/>
            Projects
          </a>
        </li>
      </ul>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  menuColor: string.isRequired,
  hoverColor: string.isRequired,
}

export default Menu;