import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TaskProperties, TaskStatus } from "./interfaces/TaskProperties";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { TaskContextType, useTaskContext } from "../context/taskContext";

const TaskElement: React.FC<TaskProperties> = ({id, title, description, status}) => {
    const { handleDeleteTask } = useTaskContext() as TaskContextType;
    let badgeClassColor;

    switch (status) {
        case TaskStatus.IN_PROGRESS: {
            badgeClassColor = 'bg-warning'
            break;
        }
        case TaskStatus.DONE: {
            badgeClassColor = 'bg-success'
            break;
        }
        default: {
            badgeClassColor = 'bg-secondary'
        }
    }
    return (
        <tr className="fw-normal">
            <th className="text-center" style={{minWidth: '150px'}}>
                <span className="text-wrap text-break text-center">{title}</span>
            </th>
            <td className="align-middle text-wrap text-center" style={{maxWidth: '50%'}}>
                <span className="text-wrap text-break text-center">{description}</span>
            </td>
            <td className="align-middle" style={{minWidth: '100px'}}>
                <h4 className="mb-0 text-center">
                    <span className={`badge ${badgeClassColor} text-center`}>{status}</span>
                </h4>
            </td>
            <td className="align-middle" style={{minWidth: '75px'}}>
                <div className="text-center" title="edit" style={{float: 'left', width:'50%'}}>
                    <FontAwesomeIcon icon={faPenToSquare} size="lg"/>
                </div>
                <div className="text-center" title="delete" style={{float: 'left', width: '50%'}}>
                    <FontAwesomeIcon icon={faTrashCan} size="lg" onClick={() => handleDeleteTask(id)}/>
                </div>
            </td>
        </tr>
    );
};

export default TaskElement;