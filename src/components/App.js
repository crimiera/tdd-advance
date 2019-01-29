import React, { Component } from 'react';
import './App.css';
import Wallet from './Wallet';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          App
        </header>
        <main>
          <Wallet/>
        </main>
      </div>
    );
  }
}

export default App;
