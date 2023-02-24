import { Button, Modal } from "react-bootstrap";
import CreateTaskForm from "../CreateTaskForm";
import { CreateTaskModalProps } from "../interfaces/CreateTaskModalProps";

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({show, handleClose, onSubmit, error}) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Create Task Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateTaskForm onSubmit={onSubmit} error={error}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTaskModal;