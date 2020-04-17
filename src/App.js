import React from 'react';
import Counter from './Counter';
import CounterNew from './CounterNew';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Counter Class</h1>
        <Counter />
        <hr />
        <h1>Counter Hooks</h1>
        <CounterNew />
        <hr />
      </header>
    </div>
  );
}

export default App;
