import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About'
import SercivesList from './components/ServicesList/ServicesList';
import ProjectsList from './components/ProjectsList/ProjectList';
import Main from './components/Main/Main'
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ServicesDetails from './components/ServicesDetails/ServicesDetails';
import ProjectsDetails from './components/ProjectsDetails/ProjectsDetails';
import Contact from './components/Contact/Contact'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        
        <Route path="/" element={<Main />} />
        <Route path="services" element={<SercivesList />} />
        <Route path="projects" element={<ProjectsList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<ServicesDetails />} />
        <Route path="/projects/:id" element={<ProjectsDetails />} />
        <Route path="/contact" element={<Contact />} />

      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
