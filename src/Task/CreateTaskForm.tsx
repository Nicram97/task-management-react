import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Alert from "../errors/Alert/Alert";
import { CreateTaskFormProps } from "./interfaces/CreateTaskFormProps";

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({onSubmit, error}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <Form onSubmit={async (e: React.SyntheticEvent) => await onSubmit(e, title, description)}>
            {typeof error !== "undefined" && <Alert {...error}/>}
            <Form.Group controlId="formTitle">
                <Form.Label>Task title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
  
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>
            <Button className='mt-2' variant="primary" type="submit">
                Add
            </Button>
        </Form>
    );
};

export default CreateTaskForm;