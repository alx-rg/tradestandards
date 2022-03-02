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
        <div>
          <Outlet />
        </div>   
      </header>
      <Footer />
    </div>
  );
}

export default App;
