import React from 'react';
import './ServicesEach.css'
import data from '../../services-data.json'
import { Link } from 'react-router-dom';

function ServicesEach(props) {
  const {name, image, desc, alt, id } = props
  return (
    <div >
      <Link to={`/details/${id}`} className="ServicesCard">
        <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
          alt={`${alt}`}
        />
      <h1>{name}</h1>
      <p>{desc}</p>
      </Link>      
    </div>
  )
}

export default ServicesEach
