import React, { Component } from 'react';

// --- Composant enfant ---
class Child extends Component {
  componentWillUnmount() {
    alert('Component will be unmounted!');
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

// --- Composant principal ---
class ColorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true, // ← nouvelle propriété pour gérer l'affichage du composant Child
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('In shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('In getSnapshotBeforeUpdate');
    console.log('Previous color was:', prevState.favoriteColor);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('After update');
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change color to blue</button>

        <hr />

        {this.state.show && <Child />}
        <button onClick={this.deleteChild}>Delete Child</button>
      </div>
    );
  }
}

export default ColorComponent;
