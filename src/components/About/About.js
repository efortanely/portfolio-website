import React from 'react';
import { Button } from "@material-tailwind/react";
import { StyledAbout } from './About.styled';

const About = ({ open, width, linkColor, hoverColor }) => {
  return (
    <StyledAbout open={open} width={width} linkColor={linkColor} hoverColor={hoverColor}>
      <div className='content'>
        <h1>ELIZABETH FORTANELY — SOFTWARE ENGINEER — AUSTIN, TX</h1>
        <p>I'm a UT Austin alum with a B.S.A. in Computer Science and a Studio Art minor. I have 1.5 years of experience in full-stack web development and data visualization. I'm interested in pursuing new roles in full-stack web development or machine learning. In my free time, I've been working on my <a href="https://www.etsy.com/shop/LizziesCozyCrafts">crochet plushie small business</a> and attending local LGBTQ+ events!</p>
        <p>If you are interested in working with me or have any questions, please don't hesitate to contact me.</p>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href='mailto:elizabeth.fortanely@gmail.com';
        }} size="lg" ripple={true} color="white" variant="outlined" className="button flex items-center justify-center gap-3 bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Contact Me
        </Button>
      </div>
      </StyledAbout>
  );
}

export default About;
