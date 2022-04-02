import React from 'react';
import ProjectsEach from '../ProjectsEach/ProjectsEach';
import "./ProjectsList.css";
import data from '../../recent-projects.json'

function ProjectsList() {

  const projects = data.map(({title, desc, images, alt }, i) => {
    return (
      <ProjectsEach
        id={i}
        key={title}
        name={title}
        desc={desc}
        image={images[0]}
        alt={alt}
      />
    ) 
  })

  return (
    <div>
    <div className='ProjectsHeader'>
      <h1>Our Projects</h1>
    </div>
    <div className="ProjectsList">
      { projects }
    </div>
  </div>
  )
}

export default ProjectsList