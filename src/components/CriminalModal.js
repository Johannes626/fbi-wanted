import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function CriminalModal({ modalShow, hideModal, modalData }) {
  const modifiedData = modalData;

  return (
    <Modal show={modalShow} onHide={hideModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{modalData?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{modalData?.details}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hideModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CriminalModal;
