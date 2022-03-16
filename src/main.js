import logo from './logo.svg';
import './App.css';
import Table from './table.js';
import Counter from './counter.js';

const Main = () => {
  return(
    <div className="App">
      <header className="App-header">
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
        <Table flavor="tennis"/>
        <Counter/>
      </header>
    </div>
  )
}

export default Main
