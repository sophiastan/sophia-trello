import React from 'react';
import EditableLabel from 'react-editable-label';

export const Card = () => {
  return (
    <div className='card'>
      <EditableLabel initialValue={'Example Task 1'} save={value => { console.log(value) }} />
    </div>
  );
}

export default Card;