import React, { Component } from 'react';
import './App.css';
import Wallet from './Wallet';
import Loot from './Loot';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          App
        </header>
        <main>
          <Wallet/>
          <hr/>
          <Loot/>
        </main>
        <div >Powered by <a href='https://www.coindesk.com/price'>CoinDesk</a></div>
      </div>
    );
  }
}

export default App;
