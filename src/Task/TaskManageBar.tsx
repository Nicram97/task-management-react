import { useState } from "react";
import { useTaskContext, TaskContextType } from "../context/taskContext";
import AddTaskButton from "./AddTaskButton";
import { DefaultTaskStatus, SearchTaskStatusType, TaskStatus } from "./interfaces/TaskProperties";

const TaskManageBar: React.FC = () => {
    const {
        handleTasksSearch
    } = useTaskContext() as TaskContextType;
    const [search, setSearch] = useState<string>('');
    const [taskStatus, setTaskStatus] = useState<SearchTaskStatusType>(DefaultTaskStatus.STATUS);

    return (
        <div className="d-flex justify-content-between">
            <AddTaskButton />
            <div className="d-flex justify-content-md-end mb-1">
                <button type="button"
                    className="btn btn-danger" 
                    onClick={ () => handleTasksSearch(search, taskStatus) }
                >Search
                </button>
                <div className="input-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Title/Description"
                        aria-label="Username"
                        aria-describedby="Search input"
                        onChange={ (e) => setSearch(e.target.value) }
                    />
                </div>
                <div className="col-sm-5">
                    <select className="form-select"
                        defaultValue={DefaultTaskStatus.STATUS}
                        aria-label="Select task status"
                        onChange={ (e) => setTaskStatus(e.target.value as SearchTaskStatusType) }
                    >
                        <option key={DefaultTaskStatus.STATUS} value={DefaultTaskStatus.STATUS}>Status</option>
                        {Object.keys(TaskStatus).map(status => <option key={status} value={status}>{status}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TaskManageBar;