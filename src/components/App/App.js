import './App.css';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
