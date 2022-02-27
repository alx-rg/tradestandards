import React from 'react';
import Card from '../Card/Card';
import "./ChooseList.css";
import data from '../../choose-data.json'

function ChooseList() {

  const services = data.map((obj) => {
    const { title, desc, images, alt } = obj
    return (
      <Card
        key={title}
        name={title}
        desc={desc}
        image={images[0]}
        alt={alt}
      />
    ) 
  })

  return (
    <div className='Choose-main'>
      <h1>Why Choose Us</h1>
      <div className="Choose-list">
        { services }
      </div>
      <button>CONTACT US</button>
    </div>
  )
}

export default ChooseList