import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
import Navbar1 from './Navbar1';
import UserSidebar from './UserSidebar';
import axios from 'axios';
import '../Dashboard/admindashboard.css';

function LeaveForm() {

    const [users, setUser] = useState(null);
    const [leaveData, setLeaveData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        console.log(storedUser);
        if (storedUser) {
            setUser(JSON.parse(storedUser));

            const employeeCode = JSON.parse(storedUser).emp_code;
            // console.log(employeeCode);
            if (employeeCode) {
                // console.log(employeeCode);
                fetchLeaveData(employeeCode);
            }
        }
    }, []);

    const fetchLeaveData = async (employeeCode) => {
        try {

            const url = `http://localhost:4000/leavedetails/${employeeCode}`;
            console.log("Fetching leave data from:", url);
            const response = await axios.get(url);
            console.log(response.data);
            setLeaveData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching leave data:', error);
            setLoading(false);
        }
    };

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    

    return (
        <>
            <Navbar1 />
            <div className="admin-dashboard">
                <UserSidebar user={users} />
                <div className="main-content">

                    <h2 className="text-center">User Profiles</h2>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Emp Code</th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Applied Dates</th>
                                <th>Leave Type</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Days of leave</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="12">Loading...</td>
                                </tr>
                            ) : leaveData.length === 0 ? (
                                <tr>
                                    <td colSpan="12">No leave requests found.</td>
                                </tr>
                            ) : (
                                leaveData.map((leave, index) => (
                                    <tr key={index}>
                                        <td>{leave.emp_code}</td>
                                        <td className="text-center">
                                            <div className="profile-avatar">
                                                {leave.name.charAt(0).toUpperCase()}
                                            </div>
                                        </td>
                                        <td>{leave.name}</td>

                                        <td>{formatDate(leave.applied_leave_dates)}</td>


                                        <td>{leave.leavetype}</td>
                                        <td>{formatDate(leave.startdate)}</td>
                                        <td>{formatDate(leave.enddate)}</td>
                                        <td style={{textAlign: 'left',paddingLeft:'40px'}}>{leave.daysofleave}</td>

                                        <td>{leave.status}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>




            </div>
        </>
    );
}

export default LeaveForm;
