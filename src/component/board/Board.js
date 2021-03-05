import React, { Component } from 'react';
import BoardHeader from './BoardHeader';
import List from './List';
import AddList from './AddList';
import defaultList from './DefaultList';

/**
 * Board adds and deletes list 
 */
class Board extends Component {
  // Unique id helper
  nextId = 10;

  constructor(props) {
    super(props);
    this.state = {
      createList: false,
      lists: defaultList
    }
  }

  // Add new list
  addList(title) {
    this.nextId++; // Creates unique id
    const newList = {
      id: this.nextId,
      title,
      cards: []
    }
    const boardList = this.state.lists;
    boardList.push(newList);

    // Sync state
    this.setState({
      lists: boardList
    })
  }

  // Delete list
  deleteList(id) {
    const boardList = this.state.lists.filter((item) => {
      return item.id !== id;
    })

    // Sync state
    this.setState({
      lists: boardList
    })
  }

  render() {
    const lists = this.state.lists.map((list) => (
      <List key={list.id}
        listData={list}
        deleteList={(id) => this.deleteList(id)}
      />
    ));

    return (
      <div className='main'>
        <BoardHeader />
        <div className='board'>
          {lists}
          <div className='list-wrapper'>
            <AddList listLength={this.state.lists.length} addList={(title) => this.addList(title)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
