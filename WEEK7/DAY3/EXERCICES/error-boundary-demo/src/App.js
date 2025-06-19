// App.js
import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }

    return (
      <h1 onClick={this.handleClick}>
        Click me: {this.state.counter}
      </h1>
    );
  }
}

// Simulations
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Simulation 1: 2 counters in ONE ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h2>Simulation 2: 2 counters in SEPARATE ErrorBoundaries</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h2>Simulation 3: 1 counter WITHOUT ErrorBoundary</h2>
      <BuggyCounter />
    </div>
  );
}

export default App;
