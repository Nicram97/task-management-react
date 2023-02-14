import { TaskStatus } from './interfaces/TaskProperties';
import TaskElement from './TaskElement';
import './TasksList.css'

const TasksList: React.FC = () => {
    return (
        <section>
            <div className="container py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 col-xl-10">
                        <div className="mask-custom">
                            <div className="card-body p-4 text-white">
                                <div className="text-center pt-3 pb-2">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                                        alt="Check" width="60px" />
                                    <h2 className="my-2">Task List</h2>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="justify-content-md-start mb-1">
                                        <button type="button" className="btn btn-danger">Add Task</button>
                                    </div>
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
                                <div className="card-body overflow-auto"
                                    style={{position: 'relative', maxHeight: '400px'}}>
                                    <table className="table text-white mb-0">
                                        <thead>
                                            <tr>
                                            <th className="text-center" scope="col">Title</th>
                                            <th className="text-center" scope="col">Description</th>
                                            <th className="text-center" scope="col">Status</th>
                                            <th className="text-center" scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TasksList;