import React, { Component } from 'react';
import BoardHeader from './BoardHeader';
import List from './List';
import AddList from './AddList';
import defaultList from './DefaultList';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      createList: false,
      lists: defaultList
    }
  }

  // Add new list
  addList(title) {
    const newList = {
      id: this.state.lists.length + 1,
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

  // Add new list
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
    const lists = this.state.lists.map((list, index) => (
      <List key={index}
        listData={list}
        deleteList={(id) => this.deleteList(id)}
      />
    ));

    console.log('render() lists: ');
    console.log(this.state.lists);

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
