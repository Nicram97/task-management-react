import Navigation from "../Navigation/Navigation";
const DashboardWrapper: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <>
            <Navigation />
            <section>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12 col-xl-10">
                            <div className="mask-custom">
                                <div className="card-body p-4 text-white">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default DashboardWrapper;