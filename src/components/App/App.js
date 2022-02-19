import logo from '../../logo.png';
import './App.css';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Trade Standard Logo" />
        <Header />
        
        <p>
         Look at our work below on Instagram
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/tradestandards/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trade Standards
        </a>
      </header>
    </div>
  );
}

export default App;
