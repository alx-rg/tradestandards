import React from 'react';
import Hero from "../Hero/Hero"
import ChooseList from "../ChooseList/ChooseList"
import ServicesList from "../ServicesList/ServicesList"
import Contact from '../Contact/Contact';
import ProjectsList from '../ProjectsList/ProjectList';

function Main() {
  return (
    <div>
      <Hero />
      <ChooseList />
      <Contact />
      <ServicesList />
      <ProjectsList />
    </div>
  )
}

export default Main