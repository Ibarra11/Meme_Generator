import React, { Component } from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator/MemeGenerator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
