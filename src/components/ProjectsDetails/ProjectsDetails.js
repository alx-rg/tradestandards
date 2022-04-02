import React from 'react'
import { useParams } from 'react-router'
import data from '../../recent-projects.json'
import "./ProjectsDetails.css";

function ProjectsDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, alt, long_desc, contact } = data[id]

  return (
    <div className='"ProjectsDetails'>
      <div className='ProjectsDetails-image'>
        <img src={`${process.env.PUBLIC_URL}/projects/${images[0]}`} alt={alt} />
      </div>
      <div className='ProjectsDetails-info'>
        <h1 className='ProjectsDetails-title'>{ title }</h1>
        <p className='ProjectsDetails-desc'>{ long_desc }</p>
      </div>
      <em className='ProjectsDetails-contact'>{ contact }</em>
    </div>
  )
}

export default ProjectsDetails