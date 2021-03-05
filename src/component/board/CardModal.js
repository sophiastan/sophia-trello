import React from 'react';
import EditableLabel from 'react-editable-label';
import { IoArchiveOutline } from 'react-icons/io5';
import Modal from 'react-modal';

export const CardModal = (props) => {

  const onShowModal = () => {
    props.showModal(false);
  }

  return (
    <Modal
      isOpen={props.isShown}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, .64)'
        },
        content: {
          display: 'flex',
          flexDirection: 'column'
        }
      }}>
      <label style={{ marginBottom: '8px' }}><b>Change Card Name: </b></label>
      <EditableLabel initialValue={props.taskText}
        save={value => props.saveTaskText(value)} />
      <button className='modal-btn' onClick={props.deleteCard}>
        <IoArchiveOutline style={{ marginRight: '10px' }} />Archive
          </button>
      <button onClick={onShowModal}>close</button>
    </Modal>
  )
}

export default CardModal;