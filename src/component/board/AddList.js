import React, { Component } from 'react';
import { TextInput, PlusIcon, CrossIcon } from 'evergreen-ui';

class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

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
    if(!this.state.editing) {
      return (
        <div className='add-list' onClick={() => this.setEditing(true)}>
          <PlusIcon marginRight={6} />Add another list</div>  
        ); 
    }
      return (
        <form className='list-form' onSubmit={(e) => this.onSubmit(e)}>
          <TextInput className='form-text' ref={input => this.textInput = input} aria-label="Enter list title..." />
          <div className='btn-group'>
            <button className='add-btn'>Add List</button>
            <CrossIcon onClick={() => this.setEditing(false)} />
          </div>
        </form>
      );
  }
}

export default AddList;