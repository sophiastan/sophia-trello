import React, { useState } from 'react';
import EditableLabel from 'react-editable-label';

export const Card = (props) => {
  const [taskText, setTaskText] = useState(props.taskText)

  const saveTaskText = (value) => {
    setTaskText(value);

    props.editTaskText(value, props.listNumber)
  }
  
  return (
    <div className='card'>
      <EditableLabel initialValue={taskText} save={value => saveTaskText(value)} />
    </div>
  );
}

export default Card;