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
    <div className="ChooseList">
      { services }
    </div>
  )
}

export default ChooseList