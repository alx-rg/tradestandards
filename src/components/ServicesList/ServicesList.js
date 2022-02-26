import React from 'react';
import ServicesEach from '../ServicesEach/ServicesEach';
import "./ServicesList.css";

function SercivesList() {
  return (
    <div className="ServicesList">
      <ServicesEach 
        name="kitchenReno"
        service="I fix up your kitchen"
        image='KitchenSquare.png'
      />
      <ServicesEach 
        name="bathroomReno"
        service="Ifix yp bathroom"
        image="BathroomSquare.png"/>
      <ServicesEach />
    </div>
  )
}

export default SercivesList