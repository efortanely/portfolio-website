import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Elizabeth Fortanely.
      </p>
      <p>
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
