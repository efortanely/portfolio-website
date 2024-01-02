import React from 'react';
import { Button } from "@material-tailwind/react";
import Resume from "../../assets/resume.pdf";
import { StyledAbout } from './About.styled';

const About = ({ open, width, linkColor, hoverColor }) => {
  return (
    <StyledAbout open={open} width={width} linkColor={linkColor} hoverColor={hoverColor}>
      <div className='content'>
        <div className='flexbox intro'>
          <h1>ELIZABETH FORTANELY — SOFTWARE ENGINEER — AUSTIN, TX</h1>
          <p>My passion lies at the intersection of technology and creativity.
            I love exploring creative coding through a number of areas of programming,
            from front-end web development, to generative deep learning, to game development, and beyond!
            You can find a sampling of my experience in my <a href={Resume} download="fortanely-resume.pdf">resume</a>.
          </p>
          <p>
            Currently, I am seeking roles within primarily front-end or full-stack web development.
            My future career goals are to be a Machine Learning Engineer, so I have applied for the Master's 
            in Artificial Intelligence program at UT Austin for Spring 2024 and am awaiting hearing back on 
            my application status.
          </p>
        </div>
        <div className='flexbox skills'>
          <div className='languages'>
            <h4>Languages</h4>
            <p>
              JavaScript/TypeScript<br/>
              Go<br/>
              HTML/CSS<br/>
              Java<br/>
              C++<br/>
              C#<br/>
              C
            </p>
          </div>
          <div className='web-dev'>
            <h4>Web Development</h4>
            <p>
              React<br/>
              SQL/SQL Alchemy<br/>
              Flask<br/>
              FastAPI<br/>
              REST<br/>
              gRPC<br/>
              Docker<br/>
              Kubernetes<br/>
              Figma<br/>
              Bootstrap
            </p>
          </div>
          <div className='machine-learning'>
          <h4>Machine Learning</h4>
            <p>
              PyTorch<br/>
              Scikit-Learn<br/>
              NLTK<br/>
              Matplotlib<br/>
              NumPy<br/>
              Pandas
            </p>
          </div>
        </div>
        <div className='flexbox contact-me'>
          <div className='contact-me'>
            <p>Feel free to contact me for leads on open positions.</p>
            <Button onClick={(e) => {
              e.preventDefault();
              window.location.href='mailto:elizabeth@fortanely.com';
            }} size="lg" ripple={true} variant="outlined" className="button flex items-center justify-center gap-3 bg-white border-gray-500 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Contact Me
            </Button>
            <p>Also available to chat about powerlifting or Car Seat Headrest.</p>
          </div>
        </div>
      </div>
      </StyledAbout>
  );
}

export default About;
