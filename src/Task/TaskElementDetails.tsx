import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTaskContext, TaskContextType } from "../context/taskContext";
import { Task } from "./interfaces/TaskEntity";
import ErrorModal from "../errors/Modal/ErrorModal";
import "./TaskDetails.css"

const TaskElementDetails: React.FC = () => {
    const { handleGetTaskById, getTaskByIdError } = useTaskContext() as TaskContextType;
    const { taskId } = useParams();
    const [task, setTask] = useState<Task>();

    useEffect(() => {
        const getData = async () => {
            if (typeof taskId !== 'undefined') {
                const getTask = await handleGetTaskById(taskId);

                setTask(getTask);
            }
        }

        getData();
    }, []);

    return (
        <>
            {typeof getTaskByIdError !== "undefined" && <ErrorModal {...getTaskByIdError}/>}
            <div className="text-center pt-3 pb-2">
                <FontAwesomeIcon icon={faListCheck} size={'4x'}/>
                <h2 className="my-2">Task Details</h2>
            </div>
            <Container>
                <Row className="mask-custom mb-2 taskRow">
                    <Col className="d-flex align-items-center"><span className="align-middle w-100">Id</span></Col>
                    <Col className="d-flex align-items-center"><span className="align-middle w-100">{task?.id}</span></Col>
                </Row>
                <Row className="mask-custom mb-2 taskRow">
                    <Col className="d-flex align-items-center"><span className="align-middle w-100">Title</span></Col>
                    <Col className="d-flex align-items-center"><span className="align-middle w-100">{task?.title}</span></Col>
                </Row>
                <Row className="mask-custom mb-2 taskRow">
                    <Col className="d-flex align-items-center"><span className="align-middle w-100">Description</span></Col>
                    <Col className="d-flex align-items-center"><span className="align-middle w-100">{task?.description}</span></Col>
                </Row>
                <Row className="mask-custom mb-2 taskRow">
                    <Col className="d-flex align-items-center"><span className="align-middle w-100">Status</span></Col>
                    <Col className="d-flex align-items-center"><span className="align-middle w-100">{task?.status}</span></Col>
                </Row>
            </Container>
        </>
    )
};

export default TaskElementDetails;