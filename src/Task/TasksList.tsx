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
                                        alt="Check" width="60" />
                                    <h2 className="my-2">Task List</h2>
                                </div>
                                <div className="card-body"
                                    data-mdb-perfect-scrollbar={true}
                                    style={{position: 'relative', maxHeight: '400px'}}>
                                    <div className="table-responsive">
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
                                                <TaskElement title='awdawdawdawdawdawdawdawdawdawd' description='awdawdawdawdawdawdawdawdawdawdawdawdawdawdawd' status={TaskStatus.OPEN}/>
                                                <TaskElement title='awdawdawdawdawd' description='awdawdafsegsegseg' status={TaskStatus.OPEN}/>
                                                <TaskElement title='awdawdawdawdawd' description='awdawdafsegsegseg' status={TaskStatus.OPEN}/>
                                                <TaskElement title='awdawdawdawdawd' description='awdawdafsegsegseg' status={TaskStatus.OPEN}/>
                                                <TaskElement title='awdawdawdawdawd' description='awdawdafsegsegseg' status={TaskStatus.OPEN}/>
                                                <TaskElement title='awdawdawdawdawd' description='awdawdafsegsegseg' status={TaskStatus.OPEN}/>
                                                <TaskElement title='awdawdawdawdawd' description='awdawdafsegsegseg' status={TaskStatus.OPEN}/>
                                                <TaskElement title='awdawdawdawdawd' description='awdawdafsegsegseg' status={TaskStatus.OPEN}/>
                                                <TaskElement title='awdawdawdawdawd' description='awdawdafsegsegseg' status={TaskStatus.OPEN}/>
                                                <TaskElement title='awdawdawdawdawd' description='awdawdafsegsegseg' status={TaskStatus.OPEN}/>
                                            </tbody>
                                        </table>
                                    </div>
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