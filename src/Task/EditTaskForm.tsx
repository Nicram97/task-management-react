import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useTaskContext, TaskContextType } from "../context/taskContext";
import Alert from "../errors/Alert/Alert";
import { EditTaskFormProps } from "./interfaces/EditTaskFormProps";
import { Task } from "./interfaces/TaskEntity";
import { TaskStatus } from "./interfaces/TaskProperties";

const EditTaskForm: React.FC<EditTaskFormProps> = ({ id, onSubmit }) => {
    const { handleGetTaskById, updateTaskError } = useTaskContext() as TaskContextType;
    const [taskToBeUpdated, setTaskToBeUpdated] = useState<Task>({
        id: '',
        title: '',
        description: '',
        status: TaskStatus.OPEN,
    });

    useEffect(() => {
        const getTaskData = async () => {
            const task = await handleGetTaskById(id);

            if (task) {
                setTaskToBeUpdated(task);
            } 
        };

        getTaskData();
    }, []);

    return (
        <Form onSubmit={async (e: React.SyntheticEvent) => await onSubmit(e, id, taskToBeUpdated)}>
            {typeof updateTaskError !== "undefined" && <Alert {...updateTaskError}/>}

            <Form.Group controlId="formId">
                <Form.Label>Task id</Form.Label>
                <Form.Control
                    type="text"
                    value={taskToBeUpdated.id}
                    disabled={true}
                />
            </Form.Group>

            <Form.Group controlId="formTitle">
                <Form.Label>Task title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={taskToBeUpdated.title}
                    disabled={true}
                />
            </Form.Group>
  
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Description"
                    value={taskToBeUpdated.description}
                    disabled={true}
                />
            </Form.Group>

            <Form.Group controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Select className="form-select"
                    value={taskToBeUpdated.status}
                    onChange={(e) => setTaskToBeUpdated(
                            prevTask => ({...prevTask, status: e.target.value as TaskStatus})
                        )
                    }>
                        {Object.keys(TaskStatus).map(status => <option key={status} value={status}>{status}</option>)}
                    </Form.Select>
            </Form.Group>
            <Button className='mt-2' variant="primary" type="submit">
                Save
            </Button>
        </Form>
    );
};

export default EditTaskForm;