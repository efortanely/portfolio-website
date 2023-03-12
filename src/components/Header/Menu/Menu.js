import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
      <li>
          <a href="/about">
            <span role="img" aria-label="about"/>
            About —
          </a>
        </li>
        <li>
          <a href="/work">
            <span role="img" aria-label="work"/>
            Work —
          </a>
        </li>
        <li>
          <a href="/projects">
            <span role="img" aria-label="projects"/>
            Projects —
          </a>
        </li>
      </ul>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;