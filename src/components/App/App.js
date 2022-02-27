import './App.css';
import Header from '../Header/Header';
import ServicesList from '../ServicesList/ServicesList';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />   
        <Outlet />
        {/* <p>
         Look at our work below on Instagram
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/tradestandards/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trade Standards
        </a> */}
      </header>
      <Footer />
    </div>
  );
}

export default App;
