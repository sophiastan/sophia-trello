import React from 'react';
// import Modal from 'react-modal';

export const CardModal = (props) => {

  const onShowModal = () => {
    props.showModal(false);
  }

  return (
    <div className='board-menu'>
      <div className='closebtn' onClick={onShowModal}>&times;</div>
      <h3>hi</h3>
      <h2>saved</h2>
    </div>
    // <Modal
    //   isOpen={props.isShown}
    //   style={{
    //     overlay: {
    //       backgroundColor: 'rgba(0, 0, 0, .64)'
    //     }
    //   }}
    //   >
    //   <h2>hi</h2>
    //   <button onClick={onShowModal}>close</button>
    // </Modal>
    // <div className='modal'>
    //   <div className='modal-content'>
    //     <span className='close' >&times;</span>
    //     <p>Some text in Modal</p>
    //   </div>
    // </div>
  )
}

export default CardModal;

{/* <Dialog
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
    </Dialog> */}