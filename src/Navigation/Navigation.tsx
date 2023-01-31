import { AuthContextType, useAuthContext } from "../context/authContext";

const Navigation: React.FC = () => {
    const { handleSignOut } = useAuthContext() as AuthContextType;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid justify-content-end">
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    onClick={handleSignOut}>
                        Sign Out
                    </button>
            </div>
        </nav>
    )
};


export default Navigation; 