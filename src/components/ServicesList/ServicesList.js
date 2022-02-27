import React from 'react';
import ServicesEach from '../ServicesEach/ServicesEach';
import "./ServicesList.css";
import data from '../../services-data.json'

function SercivesList() {

  const services = data.map(({title, desc, images, alt }, i) => {
    return (
      <ServicesEach
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
    <div className="ServicesList">
      { services }
    </div>
  )
}

export default SercivesList