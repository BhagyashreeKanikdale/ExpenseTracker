const DashboardCard = ({
    title,
    amount,
    color,
    icon
}) => {

    return (

        <div className="col-md-4">

            <div

                className="card shadow-sm"

                style={{

                    borderLeft: `6px solid ${color}`

                }}

            >

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center">

                        <div>

                            <h6 className="text-muted">

                                {title}

                            </h6>

                            <h2 className="fw-bold">

                                ₹ {amount}

                            </h2>

                        </div>

                        <div
                            style={{
                                fontSize: "45px",
                                color: color
                            }}
                        >

                            {icon}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default DashboardCard;