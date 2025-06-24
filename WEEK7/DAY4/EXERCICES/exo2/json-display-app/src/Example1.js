import React, { Component } from 'react';
import data from './data.json';

class Example1 extends Component {
  render() {
    return (
      <div>
        <h2>Example1 Component</h2>
        {data.SocialMedias.map((social, index) => (
          <div key={index}>
            <p>
              <strong>{social.name}</strong>: <a href={social.url}>{social.url}</a>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example1;
