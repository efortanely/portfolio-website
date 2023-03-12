import React from 'react';
import "./About.css"
// import { StyledAbout } from './About.styled';

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>Hi, my name is [Your Name] and I am a [Your Profession] with [Number of Years] years of experience in [Your Field]. I am passionate about [Your Passion] and enjoy working on [Your Skills].</p>
      <p>In my free time, I enjoy [Your Hobbies] and learning new things. I am a [Your Personal Trait] and always strive to [Your Goal].</p>
      <p>If you are interested in working with me or have any questions, please don't hesitate to contact me.</p>
    </div>
    // <StyledAbout open={open} width={width}>
    //   <h1>ELIZABETH FORTANELY — SOFTWARE ENGINEER — AUSTIN, TX</h1>
    // </StyledAbout>
  );
}

export default About;
