import React, { Component } from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator/MemeGenerator';
import MemeDisplay from './components/MemeDisplay/MemeDisplay';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="component-container">
          <MemeGenerator />
        </div>
        <div className="component-container">
          <MemeDisplay />
        </div>
      </div>
    );
  }
}

export default App;
