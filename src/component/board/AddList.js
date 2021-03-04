import React, { Component } from 'react';
import { TextInput, PlusIcon, CrossIcon } from 'evergreen-ui';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const title = this.textInput.value.trim();
    const id = this.props.id;
    console.log(id);
    if (title && this.props.addList) {
      this.props.addList(title, id);
    }
    this.textInput.value = '';
  }

 setEditing(editing) {
    this.setState({
      editing
    });
  }

  render() {
    if(!this.state.editing) {
      return (
        <div className='add-list' onClick={() => this.setEditing(true)}>
          <PlusIcon marginRight={6} />Add another list</div>  
        ); 
    }
      return (
        <form className='list-form' onSubmit={(e) => this.onSubmit(e)}>
          <TextInput className='list-text' ref={input => this.textInput = input} aria-label="Enter list title..." />
          <div className='btn-group'>
            <button className='list-btn'>Add List</button>
            <CrossIcon onClick={() => this.setEditing(false)} />
          </div>
        </form>
      );
  }
}

export default AddCard