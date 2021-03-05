import React, { Component } from 'react';
import CardModal from './CardModal';

/**
 * Represents a Card
 */
class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.cardData.id,
      taskText: props.cardData.taskText,
      isShown: props.isShown ? props.isShown : false
      // isShown: false
    }
  }

  // Edit Card Task
  saveTaskText = (value) => {
    this.setState({
      taskText: value
    })
  }

  // Delete card
  deleteCard = () => {
    this.props.deleteCard(this.state.id);
  }

  // Shows modal
  showModal = (isShown) => {
    console.log(isShown);
    this.setState({
      isShown
    });
  }

  render() {
    return (
      <div className='card'>
        <button className='card-btn' onClick={() => this.showModal(true)}>
          {this.state.taskText}
        </button>
        { this.state.isShown ?
          <CardModal isShown={this.state.isShown} showModal={this.showModal}
            taskText={this.state.taskText} saveTaskText={this.saveTaskText} 
            deleteCard={this.deleteCard} />
          :
          <div></div>
        }
      </div>
    )
  }
}

export default Card;