import { useEffect } from 'react';
import { TaskContextType, useTaskContext } from '../context/taskContext';
import ErrorModal from '../errors/Modal/ErrorModal';
import TaskElement from './TaskElement';
import TaskManageBar from './TaskManageBar';
import './TasksList.css'

const TasksList: React.FC = () => {
    const { handleGetTasks, tasks, getTasksError, deleteTaskError } = useTaskContext() as TaskContextType;

    useEffect(() => {
        const getAllTasks = async () => {
            await handleGetTasks();
        }

        getAllTasks();
    }, []);

    return (
        <section>
            {typeof getTasksError !== "undefined" && <ErrorModal {...getTasksError}/>}
            {typeof deleteTaskError !== "undefined" && <ErrorModal {...deleteTaskError}/>}
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
                                <TaskManageBar />
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
                                            {
                                            tasks.map(task => <TaskElement
                                                    key={task.id}
                                                    id={task.id}
                                                    title={task.title}
                                                    description={task.description}
                                                    status={task.status}/>
                                                )
                                            }
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