import React, { Component, useState } from 'react';
import EditableLabel from 'react-editable-label';
import { Dialog, Pane } from 'evergreen-ui';
import { IoArchiveOutline } from 'react-icons/io5';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskText: this.props.taskText,
      isShown: false
    }
  }

  
}

export const Card = (props) => {
  const [taskText, setTaskText] = useState(props.taskText);
  const [ isShown, setIsShown ] = useState(false);
  // console.log(props);

  const saveTaskText = (value) => {
    setTaskText(value);

    props.editTaskText(value, props.listNumber)
  }

  const deleteTask = () => {
    console.log(props.listNumber);
    console.log(props.timeId);
    props.deleteCard(props.listNumber, props.timeId);
  }

  return (
    <div onClick={() => setIsShown(true)} className='card'>
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
  );
}

export default Card;