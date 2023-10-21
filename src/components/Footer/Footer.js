import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="copyright">
        <p>
          © {new Date().getFullYear()} Elizabeth Fortanely.
          All rights reserved.
        </p>
      </div>
      <div className="email">
        <h5 className='title'>Email</h5>
        <a href='mailto:elizabeth@fortanely.com'>elizabeth@fortanely.com</a>
      </div>
      <div className="location">
        <h5 className='title'>Location</h5>
        <p>Austin, TX</p>
      </div>
      <div className="social">
        <h5 className='title'>Social</h5>
        <a href='https://www.linkedin.com/in/efortanely/'>LinkedIn</a>
        <a href='https://github.com/efortanely'>GitHub</a>

      </div>
    </footer>
  );
}

export default Footer;
