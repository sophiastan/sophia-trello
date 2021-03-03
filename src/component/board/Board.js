import React, { Component } from 'react';
import BoardHeader from './BoardHeader';
// import { PlusIcon, TextInput } from 'evergreen-ui';
import List from './List';

class Board extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('lists')) {
      const rawLS = localStorage.getItem('lists');
      const parsedLS = JSON.parse(rawLS);
      this.state = { lists: parsedLS }
    } else {
      this.state = {
        createList: false,
        lists: [
          {
            id: 0,
            title: 'To Do',
            cards: [{
              taskText: 'Example Task 1',
              listNumber: 0,
              timeId: 0
            },
            {
              taskText: 'Example Task 2',
              listNumber: 0,
              timeId: 1
            }]
          },
          {
            id: 1,
            title: 'Doing',
            cards: [{
              taskText: 'WIP',
              listNumber: 1,
              timeId: 2
            }]
          },
          {
            id: 2,
            title: 'Done',
            cards: [{
              taskText: 'Complete Task 1',
              listNumber: 2,
              timeId: 3
            }]
          }
        ]
      }
      localStorage.setItem('lists', JSON.stringify(this.state.lists))
    }
  }

  // Add new task cards
  addCard(taskText, listNumber) {
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);

    const newTask = {
      taskText,
      listNumber,
      timeId: new Date().valueOf()
    }

    parsedLS[listNumber].cards.push(newTask);

    // Sync state and localStorage
    this.setState({
      lists: parsedLS
    })
    localStorage.setItem('lists', JSON.stringify(parsedLS));
  }

  render() {
    const lists = this.state.lists.map((list, index) => (
      <List {...list}
        key={index}
        onAdd={(taskText, listNumber) => this.addCard(taskText, listNumber)}
      />
    ));

    return (
      <div className='main'>
        <BoardHeader />
        <div className='board'>
          {lists}
          {/* <div className='add-list' hidden={this.state.createList} onClick={this.setState({ createList: true })}><PlusIcon marginRight={6} />Add a list</div>
          {
            this.state.createList &&
            <div className='list-form'>
              <TextInput className='list-text' placeholder='Enter list title...' />
              <button className='list-btn'>Add List</button>
            </div>
          } */}
        </div>
      </div>

    );
  }
}

export default Board;