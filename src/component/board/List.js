import React, { Component } from 'react';
import Card from './Card';
import AddCard from './AddCard';
import { SelectMenu, MoreIcon, Position } from 'evergreen-ui';
import EditableLabel from 'react-editable-label';

/**
 * List can edit title and manage cards
 */
class List extends Component {
  // Unique id helper
  nextId = 10;

  constructor(props) {
    super(props);

    this.state = {
      listData: props.listData
    }
  }

  // Edit list title
  saveTitle(title) {
    const list = this.state.listData;
    list.title = title;

    // Sync state
    this.setState({
      listData: list
    });
  }

  // Delete list 
  deleteList(item) {
    if (item.value === 'Archive This List') {
      this.props.deleteList(this.state.listData.id);
    }
  }

  // Add new card
  addCard = (text) => {
    const list = this.state.listData;

    this.nextId++; // Creates unique id
    const newTask = {
      id: this.nextId,
      taskText: text
    }

    // Adds new card to list of cards
    list.cards.push(newTask);

    // Sync state
    this.setState({
      listData: list
    })
  }

  // Delete card 
  deleteCard(id) {
    const list = this.state.listData;
    list.cards = list.cards.filter((card) => card.id !== id);

    // Sync state
    this.setState({
      listData: list
    });
  }

  render() {
    const cards = this.state.listData.cards.map((card) => {
      return (<Card key={card.id}
        cardData={card}
        deleteCard={(id) => this.deleteCard(id)}
      />);
    })

    return (
      <div className='list-wrapper'>
        <div className='list'>
          <div className='list-header'>
            <EditableLabel
              inputClass='list-header-title-input'
              labelClass='list-header-title-label'
              initialValue={this.state.listData.title}
              save={value => this.saveTitle(value)} />
            <SelectMenu
              title='List Actions'
              hasFilter={false}
              position={Position.BOTTOM_LEFT}
              options={
                ['Add Card...', 'Archive This List']
                  .map(label => ({ label, value: label }))
              }
              onSelect={item => this.deleteList(item)}>
              <MoreIcon color='muted' />
            </SelectMenu>
          </div>
          <div className='card-list'>
            {cards}
            <AddCard cardsLength={this.state.listData.cards.length} addCard={this.addCard} />
          </div>
        </div>
      </div>
    );
  }
}

export default List;

