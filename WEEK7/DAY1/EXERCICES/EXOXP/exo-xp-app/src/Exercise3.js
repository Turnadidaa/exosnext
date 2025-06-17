import React, { Component } from 'react';
import './Exercise.css';

class Exercise extends Component {
  render() {
    const style_h1 = {
      color: "red",
      backgroundColor: "lightblue"
    };

    return (
      <div>
        <h1 style={style_h1}>This is a styled h1</h1>

        <p className="para">
          This is a paragraph styled from CSS.
        </p>

        <a href="https://reactjs.org" target="_blank" rel="noreferrer">Go to React Website</a>

        <form>
          <label>
            Name: <input type="text" name="name" />
          </label>
          <button type="submit">Submit</button>
        </form>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          width="100"
        />

        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Orange</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
