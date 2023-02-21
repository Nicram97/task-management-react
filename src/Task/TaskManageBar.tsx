import AddTaskButton from "./AddTaskButton";
import { TaskStatus } from "./interfaces/TaskProperties";

const TaskManageBar: React.FC = () => {
    return (
        <div className="d-flex justify-content-between">
            <AddTaskButton />
            <div className="d-flex justify-content-md-end mb-1">
                <button type="button" className="btn btn-danger">Search</button>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Title/Description" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="col-sm-5">
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue={'Status'}>Status</option>
                        {Object.keys(TaskStatus).map(status => <option key={status} value={status}>{status}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TaskManageBar;