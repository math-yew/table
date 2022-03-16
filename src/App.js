import { Outlet, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Nav from './nav.js';
import Table from './table.js';
import Counter from './counter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit this stuff and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
