import React from 'react';
import EditableLabel from 'react-editable-label';

export const Card = (props) => {
  return (
    <div className='card'>
      <EditableLabel initialValue={props.taskText} save={value => { console.log(value) }} />
    </div>
  );
}

export default Card;