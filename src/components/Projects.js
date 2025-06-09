import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Automatic Cloth Retrieval (2023)',
      description: 'Moving clothes into the shade during emergency rainy situation',
      year: '2023'
    },
    {
      title: 'ChatBot using LLM (2023)',
      description: 'Smart chatbot using natural language processing',
      year: '2023'
    },
    {
      title: 'Virtual Build Mart (2025)',
      description: 'Provides support to the customers who are starting to build the buildings by providing information about the Contractors, availability of raw materials, etc.....',
      year: '2023'
    }
  ];

  return (
    <section className="projects">
      <h2>✨ My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="view-project">View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;