import React from 'react';
// import { Dialog, Pane } from 'evergreen-ui';
import EditableLabel from 'react-editable-label';
import { IoArchiveOutline } from 'react-icons/io5';
import Modal from 'react-modal';

export const CardModal = (props) => {

  const onShowModal = () => {
    props.showModal(false);
  }

  return (
    // <div className='board-menu'>
    //   <div className='closebtn' onClick={onShowModal}>&times;</div>
    //   <h3>hi</h3>
    //   <h2>saved</h2>
    // </div>
    <Modal
      isOpen={props.isShown}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, .64)'
        },
        content: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly'
        }
      }}
    >
      <label style={{ marginBottom: '8px' }}><b>Change Card Name: </b></label>
      <EditableLabel initialValue={props.taskText}
        save={value => props.saveTaskText(value)} />
      <button className='modal-btn' onClick={props.deleteCard}>
        <IoArchiveOutline style={{ marginRight: '10px' }} />Archive
          </button>
      <button onClick={onShowModal}>close</button>
    </Modal>
    // <div className='modal'>
    //   <div className='modal-content'>
    //     <span className='close' >&times;</span>
    //     <p>Some text in Modal</p>
    //   </div>
    // </div>
  )
}

export default CardModal;