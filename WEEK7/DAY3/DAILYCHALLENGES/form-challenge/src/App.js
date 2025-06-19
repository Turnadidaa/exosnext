import React, { Component } from 'react';
import FormComponent from './FormComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      isFriendly: false,
      gender: '',
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Form Challenge</h1>
        <FormComponent
          formData={this.state}
          handleChange={this.handleChange}
        />

        <hr />

        <h2>Entered Information:</h2>
        <p>First Name: {this.state.firstName}</p>
        <p>Last Name: {this.state.lastName}</p>
        <p>Friendly? {this.state.isFriendly ? 'Yes' : 'No'}</p>
        <p>Gender: {this.state.gender}</p>
      </div>
    );
  }
}

export default App;
