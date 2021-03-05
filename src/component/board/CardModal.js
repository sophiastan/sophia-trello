import React from 'react';
import EditableLabel from 'react-editable-label';
import { IoArchiveOutline, IoCardOutline } from 'react-icons/io5';
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
        }
      }}>
      <div className='modal'>
        <div className='modal-header'>
          <div className='modal-item'>
            <IoCardOutline fontSize='20px' style={{ marginRight: '10px' }} />
            <EditableLabel
              inputClass='modal-title-input'
              labelClass='modal-title-label'
              initialValue={props.taskText}
              save={value => props.saveTaskText(value)} />
          </div>
          <div className='closebtn' onClick={onShowModal}>&times;</div>
        </div>
        <button className='modal-btn' onClick={props.deleteCard}>
          <IoArchiveOutline style={{ marginRight: '10px' }} />Archive
      </button>
      </div>
    </Modal>
  )
}

export default CardModal;