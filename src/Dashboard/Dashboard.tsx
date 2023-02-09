import Navigation from "../Navigation/Navigation";
import TasksList from "../Task/TasksList";

const Dashboard: React.FC = () => {
    return (
        <>
            <Navigation />
            <TasksList />
        </>
    )
};

export default Dashboard;