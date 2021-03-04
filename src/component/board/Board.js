import React, { Component } from 'react';
import BoardHeader from './BoardHeader';
import List from './List';
import AddList from './AddList';

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

  // Add new list
  addList(title, id) {
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);

    const newList = {
      id: Date.now(),
      title,
      cards: []
    }

    parsedLS.push(newList);

    // Sync state and localStorage
    this.setState({
      lists: parsedLS
    })
    localStorage.setItem('lists', JSON.stringify(parsedLS));
  }

  // Edit list title
  editTitleList(title, id) {
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);

    for (let item of parsedLS) {
      if (item.id === id) {
        item.title = title;
      }
    }

    // Sync state and localStorage
    this.setState({
      lists: parsedLS
    })
    localStorage.setItem('lists', JSON.stringify(parsedLS));
  }

  // Add new list
  deleteList(id) {
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);

    console.log('id', id);
    console.log('parsedLS ', parsedLS);

    // // Sync state and localStorage
    // this.setState({
    //   lists: parsedLS
    // })
    // localStorage.setItem('lists', JSON.stringify(parsedLS));
  }

  // Add new cards
  addCard(taskText, listNumber) {
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);

    const newTask = {
      taskText,
      listNumber,
      timeId: new Date().valueOf()
    }

    if (!parsedLS[listNumber]) {
      for (let item of parsedLS) {
        if (item.id === listNumber) {
          item.cards.push(newTask);
        }
      }
    }
    else {
      parsedLS[listNumber].cards.push(newTask);
    }

    // Sync state and localStorage
    this.setState({
      lists: parsedLS
    })
    localStorage.setItem('lists', JSON.stringify(parsedLS));
  }

  // Edit card text
  editTaskText(taskText, listNumber) {
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);

    if (parsedLS[listNumber]) {
      for (let item of parsedLS[listNumber].cards) {
        item.taskText = taskText
      }
    }
    // else {
    //   for (let item of parsedLS) {
    //     if (item.id === listNumber) {
    //       console.log(item.cards[listNumber]);
    //       // item.taskText = taskText;
    //     }
    //   }
    // }

    // console.log(parsedLS);

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
        editTitleList={(title, id) => this.editTitleList(title, id)}
        deleteList={(id) => this.deleteList(id)}
        addCard={(taskText, listNumber) => this.addCard(taskText, listNumber)}
        editTaskText={(taskText, listNumber) => this.editTaskText(taskText, listNumber)}
      />
    ));

    return (
      <div className='main'>
        <BoardHeader />
        <div className='board'>
          {lists}
          <div className='list-wrapper'>
            <AddList addList={(title, id) => this.addList(title, id)} />
          </div>
        </div>
      </div>

    );
  }
}

export default Board;