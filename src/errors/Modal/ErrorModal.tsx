import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ERROR_CODE } from "../../utils/constants";
import { ServiceError } from "../ServiceError";

const ErrorModal: React.FC<ServiceError> = ({code, cause, errorMessage}) => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
  
    return (
      <>  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Error {ERROR_CODE[code]} {typeof cause === 'string' ? cause : null}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{errorMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ErrorModal;