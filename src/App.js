import React from 'react';
import './App.css';
import Counter from './features/counter/Counter';
import Coin from './features/coin/Coin';
import CounterRedux from './features/counter/CounterRedux';
import Theam from './features/theam/Theam';

function App() {
  
  return (
    <div className="App">
      <h1>Hello This Is React Redux Tutorial</h1>
      <Counter />
      <CounterRedux />
      <Coin />
      <Theam />
    </div>
  );
}

export default App;
