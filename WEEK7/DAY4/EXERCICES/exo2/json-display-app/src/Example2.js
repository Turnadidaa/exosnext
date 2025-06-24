import React, { Component } from 'react';
import data from './data.json';

class Example2 extends Component {
  render() {
    const { Frontend, Backend } = data.Skills;

    return (
      <div>
        <h2>Example2 Component</h2>
        <h3>Frontend Skills:</h3>
        {Frontend.map((skill, index) => (
          <div key={`fe-${index}`}>{skill}</div>
        ))}

        <h3>Backend Skills:</h3>
        {Backend.map((skill, index) => (
          <div key={`be-${index}`}>{skill}</div>
        ))}
      </div>
    );
  }
}

export default Example2;
