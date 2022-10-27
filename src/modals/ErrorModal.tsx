import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ErrorProps {
    statusCode: number;
    message: string;
    show: boolean;
}


const ErrorModal: React.FC<ErrorProps> = (props) => {
  const [show, setShow] = useState<boolean>(props.show);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Error {props.statusCode}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.message}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Okay</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ErrorModal;