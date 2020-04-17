import React, { useState } from 'react';

const CounterNew = () => {
  const [ counter, setCounter ] = useState(0);

  const changeState = (type) => {
    setCounter(counter + (type === '+' ? +1 : -1));
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => (changeState('+'))}>+</button>
      <br />
      <button onClick={() => (changeState('-'))}>-</button>
    </div>
  );
}

export default CounterNew;
