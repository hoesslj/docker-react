import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>jhsrc/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React_JH
        </a>
      </header>
      <p className="App-intro">
        Hi there!
      </p>
      <p className="App-intro">
        Bye there!
      </p>
      <p className="App-intro">
        I was changed on feature branch
      </p>
    </div>
  );
}

export default App;
