import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    input: '',
    responseMessage: ''
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:5000/api/hello');
    const data = await response.json();
    this.setState({ message: data.message });
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input: this.state.input })
    });

    const data = await response.json();
    this.setState({ responseMessage: data.message });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleChange} />
          <button type="submit">Send</button>
        </form>
        <p>{this.state.responseMessage}</p>
      </div>
    );
  }
}

export default App;
