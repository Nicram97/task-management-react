import { TaskProperties } from "./interfaces/TaskProperties";

const TaskElement: React.FC<TaskProperties> = ({title, description, status}) => {
    return (
        <tr className="fw-normal">
            <th>
                <span className="ms-2">{title}</span>
            </th>
            <td className="align-middle">
                <span>{description}</span>
            </td>
            <td className="align-middle">
                <h6 className="mb-0">
                    <span className="badge bg-danger">{status}</span>
                </h6>
            </td>
            <td className="align-middle">
                {/* <div data-mdb-toggle="tooltip" title="Done"><i
                    className="fas fa-check fa-lg text-success me-3"></i></div>
                <div data-mdb-toggle="tooltip" title="Remove"><i
                    className="fas fa-trash-alt fa-lg text-warning"></i></div> */}
            </td>
        </tr>
    );
};

export default TaskElement;