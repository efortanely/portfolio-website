import React from 'react';
import './Work.css'

function Work() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id justo ut urna mattis eleifend sit amet vel arcu.',
      image: 'project1.jpg',
      link: 'https://www.project1.com'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: 'project2.jpg',
      link: 'https://www.project2.com'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Donec tempus, magna sed condimentum ultricies, risus elit congue urna, id venenatis elit elit sit amet mi.',
      image: 'project3.jpg',
      link: 'https://www.project3.com'
    }
  ];

  return (
    <div className="work">
      <h2>My Work</h2>
      {projects.map((project) => (
        <div key={project.id} className="project">
          <img src={project.image} alt={project.title} />
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Work;
