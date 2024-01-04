import React, { useState, useEffect } from 'react';
import { bool, string } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { theme } from '../../../theme';

const Menu = ({ open, menuColor, hoverColor }) => {
  const [listPadding, setListPadding] = useState(0.7);

  useEffect(() => {
    const handleResize = () => {
      // 700px is when header stops displaying burger menu
      const responsivePadding = 0.7 + 0.6 * (1 - ((700 - window.innerWidth) / (700 - theme.mobile)));
      setListPadding(responsivePadding);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <StyledMenu open={open} menuColor={menuColor} hoverColor={hoverColor} theme={theme} listPadding={listPadding}>
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
  );
}

Menu.propTypes = {
  open: bool.isRequired,
  menuColor: string.isRequired,
  hoverColor: string.isRequired,
}

export default Menu;