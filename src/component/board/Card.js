import React, { Component } from 'react';
import EditableLabel from 'react-editable-label';
import { Dialog, Pane } from 'evergreen-ui';
import { IoArchiveOutline } from 'react-icons/io5';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      taskText: this.props.taskText,
      isShown: false
    }
  }

  // Edit Card Task
  saveTaskText(value) {
    this.setState({
      taskText: value
    })
  }

  deleteCard = () => {
    console.log(props.listNumber);
    console.log(props.timeId);
    props.deleteCard(props.listNumber, props.timeId);
  }

  render() {
    return (
      <div className='card' onClick={() => this.setState({ isShown: true})}>
        <label style={{ marginRight: '50px' }}>{taskText}</label>
        <Dialog
        isShown={isShown}
        title={props.taskText}
        onCloseComplete={() => setIsShown(false)}
      >
        <Pane>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ marginBottom: '8px' }}><b>Change Card Name: </b></label>
            <EditableLabel initialValue={taskText} 
              save={value => saveTaskText(value)} />
            <button className='card-btn' onClick={deleteTask}>
              <IoArchiveOutline style={{ marginRight: '10px' }} />Archive
            </button>
            </div>
          </Pane>
      </Dialog>
      </div>
    )
  }
}

export default Card;