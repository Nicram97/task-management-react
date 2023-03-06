import { Button, Modal } from "react-bootstrap";
import EditTaskForm from "../EditTaskForm";
import { EditTaskModalProps } from "../interfaces/EditTaskModalProps";

const EditTaskModal: React.FC<EditTaskModalProps> = ({id, show, handleClose, onSubmit}) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Task Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditTaskForm id={id} onSubmit={onSubmit}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditTaskModal;