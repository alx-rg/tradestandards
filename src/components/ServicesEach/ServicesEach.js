import React from 'react';
import './ServicesEach.css'

function ServicesEach(props) {
  const {name, image, service } = props
  return (
    <div className="ServicesCard">
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
        alt="Kitchen Renovation"
      />
      <h1>{name}</h1>
      <div>{service}</div>
    </div>
  )
}

export default ServicesEach
