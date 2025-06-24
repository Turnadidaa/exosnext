import React, { Component } from 'react';
import data from './data.json';

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Example3 Component</h2>
        {data.Experiences.map((exp, index) => (
          <div key={`exp-${index}`}>
            <h3>{exp.company}</h3>
            {exp.roles.map((role, i) => (
              <div key={`role-${index}-${i}`}>{role}</div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
