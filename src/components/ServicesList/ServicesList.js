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
      <div>
        <div className='ServicesHeader'>
          <h1>Services</h1>
        </div>
        <div className="ServicesList">
          { services }
        </div>
      </div>
  )
}

export default SercivesList