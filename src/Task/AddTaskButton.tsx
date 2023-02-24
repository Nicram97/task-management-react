import { useState } from "react";
import { TaskContextType, useTaskContext } from "../context/taskContext";
import CreateTaskModal from "./Modal/CreateTaskModal";

const AddTaskButton: React.FC = () => {
    const { handleCreateTask, createTaskError, setCreateTaskError } = useTaskContext() as TaskContextType;
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setCreateTaskError(undefined);
    }
    const handleShow = () => setShow(true);
  
    const onCreateTaskSubmit = async (e: React.SyntheticEvent, title: string, description: string): Promise<void> => {
      e.preventDefault();

      console.log(`title: ${title}, description: ${description}`);
      const createdTask = await handleCreateTask({title, description});

      if (createdTask) {
        handleClose();
      }
    };

    return (
        <>
            <div className="justify-content-md-start mb-1">
                <button type="button" className="btn btn-danger" onClick={handleShow}>Add Task</button>
            </div>
            <CreateTaskModal show={show} handleClose={handleClose} onSubmit={onCreateTaskSubmit} error={createTaskError}/>
        </>
    );
}

export default AddTaskButton;