import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter:  0,
    };

  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>+</button>
        <br />
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
