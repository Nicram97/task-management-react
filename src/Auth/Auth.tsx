const Auth: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;