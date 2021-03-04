import React, { useState } from 'react';
// import EditableLabel from 'react-editable-label';
import { CrossIcon } from 'evergreen-ui';

export const Card = (props) => {
  const [taskText, setTaskText] = useState(props.taskText);
  // console.log(props);

  // const saveTaskText = (value) => {
  //   setTaskText(value);

  //   props.editTaskText(value, props.listNumber)
  // }

  const deleteTask = () => {
    console.log(props.listNumber);
    console.log(props.timeId);
    props.deleteCard(props.listNumber, props.timeId);
  }

  return (
    <div className='card'>
      {/* <EditableLabel initialValue={taskText} save={value => saveTaskText(value)} /> */}
      <label style={{ marginRight: '50px' }}>{taskText}</label>
      <button onClick={deleteTask}><CrossIcon/></button>
    </div>
  );
}

export default Card;