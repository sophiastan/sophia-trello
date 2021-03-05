import React, { Component } from 'react';
import Board from './board/Board';
import Header from './Header';

/**
 * Represents app that holds main components
 */
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
