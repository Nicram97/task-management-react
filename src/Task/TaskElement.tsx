import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TaskProperties } from "./interfaces/TaskProperties";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TaskElement: React.FC<TaskProperties> = ({title, description, status}) => {
    return (
        <tr className="fw-normal">
            <th>
                <span className="ms-2 text-wrap text-break text-center">{title}</span>
            </th>
            <td className="align-middle text-wrap">
                <span className="text-wrap text-break text-center">{description}</span>
            </td>
            <td className="align-middle">
                <h6 className="mb-0">
                    <span className="badge bg-danger text-center">{status}</span>
                </h6>
            </td>
            <td className="align-middle">
                <div className="text-center" title="edit" style={{float: 'left', width:'50%'}}>
                    <FontAwesomeIcon icon={faPenToSquare} size="lg"/>
                </div>
                <div className="text-center" title="delete" style={{float: 'left', width: '50%'}}>
                    <FontAwesomeIcon icon={faTrashCan} size="lg"/>
                </div>
            </td>
        </tr>
    );
};

export default TaskElement;