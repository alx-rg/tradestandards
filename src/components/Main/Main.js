import React from 'react';
import Hero from "../Hero/Hero"
import ChooseList from "../ChooseList/ChooseList"
import ServicesList from "../ServicesList/ServicesList"
import Contact from '../Contact/Contact';

function Main() {
  return (
    <div>
      <Hero />
      <ChooseList />
      <Contact />
      <ServicesList />
    </div>
  )
}

export default Main