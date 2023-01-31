import { Navigate } from "react-router-dom";
import { AuthContextType, useAuthContext } from "../context/authContext";

const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { isLoggedIn } = useAuthContext() as AuthContextType;

    if (!isLoggedIn) {
        return <Navigate to="/sign-in" replace />;
      }
      return <>{children}</>;
};

export default ProtectedRoute;