import React from 'react';
import { StyledProjects } from './Projects.styled';

const Work = ({ open, width}) => {
  const projects = [
    {
      id: 1,
      title: 'Variational Autoencoder for Text Generation',
      description: 'Designed and trained a model for text generations with the ability to vary the sentiment. Utilized NLTK and GloVe for data preparation, PyTorch for model design and training, with an LSTM encoder and CNN decoder. Wrote a technical report in the format of a NeurIPS submission.',
      image: 'project1.jpg',
      link: 'https://github.com/efortanely/variational-autencoders-for-text-generation'
    },
    {
      id: 2,
      title: 'Pets 4 Me',
      description: 'As part of a team of 6, developed a web app consolidating information on local adoptable pets and breed information. Utilized Python, Flask, and SQLAlchemy to create the database schema and API. Implemented the frontend with React/TypeScript/CSS.',
      image: 'project2.jpg',
      link: 'https://github.com/efortanely/Pets4Me'
    },
    {
      id: 3,
      title: 'SpotYourFriends',
      description: 'Made a web app that creates a Spotify playlist from the intersection of multiple users\' Spotify libraries. Built the front-end with HTML, CSS, and JavaScript, and the back-end with the Spotify API, Flask, and python.',
      image: 'project3.jpg',
      link: 'https://github.com/efortanely/SpotYourFriends'
    },
    {
      id: 4,
      title: 'Hijinx',
      description: 'Built a custom Java game engine, including 2D physics and scene/character renderer to create a game demo. This game follows the adventures of a witch and her black cat as they venture through the night, with their mirror portals to guide them along the way.',
      image: 'project3.jpg',
      link: 'https://github.com/efortanely/Hijinx'
    },
    {
      id: 5,
      title: 'EmotiSong',
      description: 'Designed and coded, using Java and XML, an Android app that takes a photo of a group of people and plays the corresponding song best fitting the mood of people in the photo. Queried Musixmatch API for song lyrics and used IBM Watson Natural Language Understanding API to rank their emotional sentiment.',
      image: 'project3.jpg',
      link: 'https://github.com/efortanely/EmotiSong'
    },
    {
      id: 6,
      title: 'TabGen',
      description: 'Implemented a web scraper in Selenium and python to get many musician\'s ukulele tabs from a website. Trained gpt-2-simple on the collected tabs to generate novel songs.',
      image: 'project3.jpg',
      link: 'https://github.com/efortanely/Tab-Generator'
    },
    {
      id: 7,
      title: 'PixReader',
      description: 'Used python to create an assistive screen reader that reads text and auto-generates captions for images with computer vision. Generated captions with Microsoft Cognitive Services and utilized Google Cloud Text-to-Speech to read the text.',
      image: 'project3.jpg',
      link: 'https://github.com/efortanely/PixReader'
    },
    {
      id: 8,
      title: 'Stuart Bot',
      description: 'Used python, ResNet-50, and Onion Omega 2+ to capture photos from a video feed, and tweet to the @TheStuartBot if a cat is present in the scene.',
      image: 'project3.jpg',
      link: 'https://github.com/efortanely/Stuart-Bot'
    },
    {
      id: 9,
      title: 'Parametric Plotter',
      description: 'Used Java to build a plotter for graphing three-dimensional parametric surfaces in a scene that can be freely rotated. Includes built-in functions, as well as the ability to define custom equations.',
      image: 'project3.jpg',
      link: 'https://github.com/efortanely/Parametric-Plotter'
    }
  ];

  return (
    <StyledProjects open={open} width={width}>
      <div className="projects">
        <h2>✨ Projects ✨</h2>
        {projects.map((project) => (
          <div key={project.id} className="project">
            <div className="project-info">
              <h3>{project.title} <a href={project.link}>GitHub Repo</a></h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledProjects>
  );
}

export default Work;
