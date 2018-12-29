import React, { Component } from 'react';
import './App.css';
import Person from './Searchbox/Searchbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <Person placeholder='input jumbo here' />
      </div>
    );
  }
}

export default App;
