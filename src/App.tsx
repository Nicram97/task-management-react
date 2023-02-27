import { Routes, Route } from "react-router-dom"
import Auth from "./Auth/Auth";
import Login from "./Auth/Login"
import Register from "./Auth/Register";
import Dashboard from "./Dashboard/Dashboard";
import DashboardWrapper from "./Dashboard/DashboardWrapper";
import NoMatch from "./NoMatch/NoMatch";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import TaskElementDetails from "./Task/TaskElementDetails";

const App: React.FC = () => {
  return (
        <Routes>
          <Route path="/" element={<Auth><Login/></Auth>} />
          <Route path="/sign-in" element={<Auth><Login/></Auth>} />
          <Route path="/sign-up" element={<Auth><Register/></Auth>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/dashboard/:taskId" element={
          <ProtectedRoute>
            <DashboardWrapper>
              <TaskElementDetails />
            </DashboardWrapper>
          </ProtectedRoute>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
  );
}

export default App;
