import React from 'react';
import './ProjectsEach.css'
import { Link } from 'react-router-dom';

function ProjectsEach(props) {
  const {name, image, desc, alt, id } = props
  return (
    <div className="ProjectsCard">
      <Link to={`/projects/${id}`} >
        <img src={`${process.env.PUBLIC_URL}/projects/${image}`}     
          alt={`${alt}`}
        />
      </Link>      
      <h1>
        <Link className='ProjectsCard-name'
        to={`/projects/${id}`}>
        {name}
        </Link>
      </h1>
      <div >
        <p>
          <Link className='ProjectsCard-info'
          to={`/projects/${id}`}>
          {desc}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ProjectsEach
