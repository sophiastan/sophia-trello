import React, { Component } from 'react';
import { TextInput, PlusIcon, CrossIcon } from 'evergreen-ui';

/**
 * Adds a new list
 */
class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  // Submit a new list
  onSubmit(event) {
    event.preventDefault();
    const title = this.textInput.value.trim();
    if (title && this.props.addList) {
      this.props.addList(title);
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
        <div className='add-list' onClick={() => this.setEditing(true)}>
          <PlusIcon marginRight={6} />
          { this.props.listsLength > 0 ? 'Add another list' : 'Add a list'}
        </div>
      );
    }
    return (
      <form className='list-form' onSubmit={(e) => this.onSubmit(e)}>
        <TextInput className='form-text' autoFocus ref={input => this.textInput = input} aria-label="Enter list title..." />
        <div className='btn-group'>
          <button className='add-btn'>Add List</button>
          <CrossIcon onClick={() => this.setEditing(false)} />
        </div>
      </form>
    );
  }
}

export default AddList;