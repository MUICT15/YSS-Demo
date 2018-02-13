import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoComponet from './Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Demo by React</h1>
        </header>
        <br/>
          <ToDoComponet/>
      </div>
    )
  }
}

export default App;
