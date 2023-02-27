import Navigation from "../Navigation/Navigation";
import TasksList from "../Task/TasksList";
import DashboardWrapper from "./DashboardWrapper";

const Dashboard: React.FC = () => {
    return (
        <DashboardWrapper>
            <TasksList />
        </DashboardWrapper>
    )
};

export default Dashboard;