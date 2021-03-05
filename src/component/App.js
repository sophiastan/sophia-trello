import React, { Component } from 'react';
import Board from './board/Board';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Board />
      </div>
    );
  }
}
export default App;
