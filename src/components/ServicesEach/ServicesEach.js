import React from 'react';
import './ServicesEach.css'
import data from '../../services-data.json'

function ServicesEach(props) {
  const {name, image, desc, alt } = props
  return (
    <div className="ServicesCard">
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
        alt={`${alt}`}
      />
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default ServicesEach
