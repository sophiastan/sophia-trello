import React, { Component } from 'react';
import BoardHeader from './BoardHeader';
import List from './List';
import AddList from './AddList';
import defaultList from './defaultList';

class Board extends Component {
  boardList = defaultList;

  constructor(props) {
    super(props);
    this.state = {
      createList: false,
      lists: this.boardList
    }
  }

  // Add new list
  addList(title) {
    const newList = {
      id: Date.now() + 1,
      title,
      cards: []
    }

    this.boardList.push(newList);

    // Sync state
    this.setState({
      lists: this.boardList
    })
  }

  // Edit list title
  editTitleList(title, id) {
    for (let item of this.boardList) {
      if (item.id === id) {
        item.title = title;
      }
    }

    // Sync state
    this.setState({
      lists: this.boardList
    });
  }

  // Add new list
  deleteList(id) {
    console.log(id);
    console.log(this.boardList);
    const boardList = this.boardList.filter(function(item) {
      return item.id !== id;
    })
    console.log(boardList);

    // Sync state
    this.setState({
      lists: boardList
    })
  }

  // Add new cards
  addCard(taskText, listNumber) {
    const newTask = {
      taskText,
      listNumber,
      timeId: new Date().valueOf()
    }

    if (!this.boardList[listNumber]) {
      for (let item of this.boardList) {
        if (item.id === listNumber) {
          item.cards.push(newTask);
        }
      }
    }
    else {
      this.boardList[listNumber].cards.push(newTask);
    }

    // Sync state
    this.setState({
      lists: this.boardList
    })
  }

  // Add new list
  deleteCard(listNumber, timeId) {
    console.log('listNumber ', listNumber);
    console.log('timeId ', timeId);

    for (let item of this.boardList) {
      if (item.id === listNumber) {
        for (let card of item.cards) {
          if (card.timeId === timeId) {
            item.cards.pop(card);
          }
        }
      }
    }

    console.log(this.boardList);

    // Sync state
    this.setState({
      lists: this.boardList
    })
  }

  // Edit card text
  editTaskText(taskText, listNumber) {
    if (this.boardList[listNumber]) {
      for (let item of this.boardList[listNumber].cards) {
        item.taskText = taskText
      }
    }
    else {
      for (let item of this.boardList) {
        if (item.id === listNumber) {
          console.log(item.cards[listNumber]);
          // item.taskText = taskText;
        }
      }
    }

    // console.log(parsedLS);

    // Sync state
    this.setState({
      lists: this.boardList
    })
  }

  render() {
    const lists = this.state.lists.map((list, index) => (
      <List {...list}
        key={index}
        editTitleList={(title, id) => this.editTitleList(title, id)}
        deleteList={(id) => this.deleteList(id)}
        addCard={(taskText, listNumber) => this.addCard(taskText, listNumber)}
        deleteCard={(listNumber, timeId) => this.deleteCard(listNumber, timeId)}
        editTaskText={(taskText, listNumber) => this.editTaskText(taskText, listNumber)}
      />
    ));

    return (
      <div className='main'>
        <BoardHeader />
        <div className='board'>
          {lists}
          <div className='list-wrapper'>
            <AddList listLength={this.boardList.length} addList={(title) => this.addList(title)} />
          </div>
        </div>
      </div>

    );
  }
}

export default Board;