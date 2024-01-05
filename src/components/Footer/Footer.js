import React from 'react';
import Resume from "../../assets/resume.pdf";
import { theme } from '../../theme';
import { StyledFooter } from './Footer.styled.js';
import './Footer.styled.js'

function Footer() {
  return (
    <StyledFooter theme={theme}>
      <footer>
        <div className='resume'>
          <h5 className='footer-title'>Experience</h5>
          <a href={Resume} download="fortanely-resume.pdf">Resume</a>
        </div>
        <div className="email">
          <h5 className='footer-title'>Email</h5>
          <a href='mailto:elizabeth@fortanely.com'>elizabeth@fortanely.com</a>
        </div> 
        <div className="social">
          <h5 className='footer-title'>Social</h5>
          <a className="linkedin" href='https://www.linkedin.com/in/efortanely/'>LinkedIn</a>
          <a href='https://github.com/efortanely'>GitHub</a>
        </div>
        <div className='source'>
          <h5 className='footer-title'>Source</h5>
          <a href="https://github.com/efortanely/portfolio-website">Repo</a>
        </div>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
