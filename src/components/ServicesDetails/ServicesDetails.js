import React from 'react'
import { useParams } from 'react-router'
import data from '../../services-data.json'
import "./ServicesDetails.css";

function ServicesDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, alt, long_desc, contact } = data[id]

  return (
    <div className='"ServicesDetails'>
      <div className='ServicesDetails-image'>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={alt} />
      </div>
      <div className='ServicesDetails-info'>
        <h1 className='ServicesDetails-title'>{ title }</h1>
        <p className='ServicesDetails-desc'>{ long_desc }</p>
      </div>
      <em className='ServicesDetails-contact'>{ contact }</em>
    </div>
  )
}

export default ServicesDetails