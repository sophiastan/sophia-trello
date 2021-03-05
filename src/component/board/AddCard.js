import React, { Component } from 'react';
import { TextInput, PlusIcon, CrossIcon } from 'evergreen-ui';
import { IoCardSharp } from 'react-icons/io5';

/**
 * Adds a new card
 */
class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  // Submit a new card
  onSubmit(event) {
    event.preventDefault();
    const taskText = this.textInput.value.trim();
    if (taskText && this.props.addCard) {
      this.props.addCard(taskText);
    }
    this.textInput.value = '';
  }

  setEditing(editing) {
    this.setState({
      editing
    });
  }

  render() {
    if (!this.state.editing) {
      return (
        <div className='add-card' onClick={() => this.setEditing(true)}>
          <PlusIcon marginRight={6} />
          { this.props.cardsLength > 0 ? 'Add another card' : 'Add a card'}
          <div style={{ flexGrow: '1' }}></div>
          <IoCardSharp color='grey' />
        </div>
      );
    }
    return (
      <form className='card-form' onSubmit={(e) => this.onSubmit(e)}>
        <TextInput className='form-text' autoFocus ref={input => this.textInput = input} aria-label="Add a task" />
        <div className='btn-group'>
          <button className='add-btn'>Add Card</button>
          <CrossIcon onClick={() => this.setEditing(false)} />
        </div>
      </form>
    );
  }
}

export default AddCard