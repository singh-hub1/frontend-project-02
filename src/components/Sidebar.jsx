import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ adminName }) => {
    return (
        <div className="col-auto col-md-1 col-xl-2 px-sm-2 px-0 bg-black">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 fw-bolder d-none d-sm-inline">{adminName}</span>
                </Link>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                    <li>
                        <Link to="/admindashboard/DashboardAdmin" className="nav-link text-white px-0 align-middle">
                            <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </Link>
                    </li>


                    <li>
                        <Link to="/admindashboard/AllUsers" className="nav-link text-white px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Show All Users</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/admindashboard" className="nav-link text-white px-0 align-middle">
                            <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Leave Requests</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/admindashboard/AddUserForm" className="nav-link text-white px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Add User</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/employeeLogin" className="nav-link text-white px-0 align-middle">
                            <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
