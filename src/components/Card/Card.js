import React from 'react';
import './Card.css'
import data from '../../services-data.json'


function Card(props) {
  const {name, image, desc, alt } = props
  return (
    <div className="Card">
        <img src={`${process.env.PUBLIC_URL}/images/icon/${image}`}     
          alt={`${alt}`}
        />
      <h4>{name}</h4>
      <p>{desc}</p>
    </div>
  )
}

export default Card
