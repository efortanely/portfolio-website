import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer>
      <p>Copyright © {new Date().getFullYear()}
        <span> My Portfolio </span> - All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
