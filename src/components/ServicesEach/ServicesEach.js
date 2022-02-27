import React from 'react';
import './ServicesEach.css'
import data from '../../services-data.json'
import { Link } from 'react-router-dom';

function ServicesEach(props) {
  const {name, image, desc, alt, id } = props
  return (
    <div className="ServicesCard">
      <Link to={`/details/${id}`} >
        <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
          alt={`${alt}`}
        />
      </Link>      
      <h1>
        <Link className='ServicesCard-name'
        to={`/details/${id}`}>
        {name}
        </Link>
      </h1>
      <div >
        <p>
          <Link className='ServicesCard-info'
          to={`/details/${id}`}>
          {desc}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ServicesEach
