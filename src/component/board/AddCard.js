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
    const taskText = this.textInput.value.trim();
    const listNumber = this.props.formNum;
    console.log(listNumber)
    if (taskText && this.props.onAdd) {
      this.props.onAdd(taskText, listNumber);
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
        <div className='add-card' onClick={() => this.setEditing(true)}>
          <PlusIcon marginRight={6} />Add another card</div>  
        ); 
    }
      return (
        <form className='card-form' onSubmit={(e) => this.onSubmit(e)}>
          <TextInput className='list-text' ref={input => this.textInput = input} aria-label="Add a task" />
          <div className='btn-group'>
            <button className='list-btn'>Add Card</button>
            <CrossIcon onClick={() => this.setEditing(false)} />
          </div>
        </form>
      );
  }
}

export default AddCard