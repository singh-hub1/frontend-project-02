import React from 'react';
import { Link } from 'react-router-dom';

const UserSidebar = ({ user }) => {
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-4 bg-black">

            <div className="sidebar">

                {user && (
                    <div>

                        <tr>
                            <td style={{ padding: "3px" }}>
                                <div className="profile-avatar" >
                                    {user.name.charAt(0).toUpperCase()}
                                </div>



                            </td>
                            <td style={{ padding: "6px" }}>
                                <h2 style={{ color: 'white',fontSize:'20px'}}>{user.name}</h2>
                            </td>



                        </tr>

                    </div>
                )}








            </div>



            <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-1 text-white min-vh-100">
                <Link to="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 fw-bolder d-none d-sm-inline"></span>
                </Link>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li>
                        <Link to="/UserDashboard" className="nav-link text-white px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">User Dashboard</span>
                        </Link>
                    </li>

                    {/* <li>
                        <Link to="/UserDashboard/summary" className="nav-link text-white px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Summary</span> 
                        </Link>
                    </li> */}

                    <li>
                        <Link to="/UserDashboard/LeaveForm" className="nav-link text-white px-0 align-middle">
                            <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Leave Form Request</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/UserDashboard/LeaveDetails" className="nav-link text-white px-0 align-middle">
                            <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">User Leave details</span>
                        </Link>
                    </li>
                    <li>
                        <a href="/employeeLogin" className="nav-link text-white px-0 align-middle">
                            <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UserSidebar;
