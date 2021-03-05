import React, { Component } from 'react';
// import CardModal from './CardModal';
import { Dialog, Pane } from 'evergreen-ui';
import EditableLabel from 'react-editable-label';
import { IoArchiveOutline } from 'react-icons/io5';

/**
 * Represents a Card
 */
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
        <button className='card-btn' onClick={this.deleteCard}>
          <IoArchiveOutline style={{ marginRight: '10px' }} />Archive
          </button>
        {/* <Dialog
          isShown={this.state.isShown}
          title={this.state.taskText}
          onCloseComplete={() => this.setState({ showModal: false})}
        >
          <Pane>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '8px' }}><b>Change Card Name: </b></label>
              <EditableLabel initialValue={this.state.taskText}
                save={value => this.saveTaskText(value)} />
              <button className='card-btn' onClick={this.deleteCard}>
                <IoArchiveOutline style={{ marginRight: '10px' }} />Archive
          </button>
            </div>
          </Pane>
        </Dialog> */}
        {/* { this.state.isShown ?
          <CardModal isShown={this.state.isShown} showModal={this.showModal}
            saveTaskText={this.saveTaskText} deleteCard={this.deleteCard} />
          :
          <div></div>
        } */}
      </div>
    )
  }
}

export default Card;