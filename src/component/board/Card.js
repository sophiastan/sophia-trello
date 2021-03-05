import React, { Component } from 'react';
import CardModal from './CardModal';

class Card extends Component {
  constructor(props) {
    super(props);

    console.log(props.cardData);
    this.state = {
      id: props.cardData.id,
      taskText: props.cardData.taskText,
      isShown: props.isShown ? props.isShown : false
    }
    console.log(this.state.taskText);
  }

  // Edit Card Task
  saveTaskText(value) {
    this.setState({
      taskText: value
    })
  }

  deleteCard = () => {
    this.props.deleteCard(this.state.id);
  }

  showModal = (value) => {
    this.setState({
      isShown: value
    });
  }

  render() {
    return (
      <div className='card'>
        <label className='card-label' onClick={() => this.setState({ isShown: true })}>
          {this.state.taskText}
        </label>
        { this.state.isShown ?
          <CardModal isShown={this.state.isShown} showModal={this.showModal}
            saveTaskText={this.saveTaskText} deleteCard={this.deleteCard} />
          :
          <div></div>
        }
      </div>
    )
  }
}

export default Card;