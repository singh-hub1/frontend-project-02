import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Navbar1 from './Navbar1';
import UserSidebar from './UserSidebar';
import axios from 'axios';

function LeaveForm() {

    const [users, setUser] = useState(null);
    const [leaveData, setLeaveData] = useState([]);

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

            const url = `https://backend-project-02-1.onrender.com/leavedetails/${employeeCode}`;
            console.log("Fetching leave data from:", url);
            const response = await axios.get(url);
            console.log(response.data);
            setLeaveData(response.data);
        } catch (error) {
            console.error('Error fetching leave data:', error);
        }
    };

    return (
        <>
            <Navbar1 />
            <div className="user-dashboard">
                <UserSidebar user={users} />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Emp Code</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Leave Type</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Days of leave</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaveData.map((leave, index) => (
                            <tr key={index}>
                                <td>{leave.emp_code}</td>
                                <td className="text-center">
                                    <div className="profile-avatar">
                                        {leave.name.charAt(0).toUpperCase()}
                                    </div>
                                </td>
                                <td>{leave.name}</td>
                                <td>{leave.leavetype}</td>

                                <td>{new Date(leave.startdate).toLocaleDateString()}</td>
                                <td>{new Date(leave.enddate).toLocaleDateString()}</td>



                                <td>{leave.daysofleave}</td>
                                <td>{leave.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default LeaveForm;






















// import React, { useState, useEffect } from "react";
// import { Table } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
// import Navbar1 from './Navbar1';
// import UserSidebar from './UserSidebar';
// import axios from 'axios';

// function LeaveForm() {

//     const [users, setUser] = useState(null);
//     const [leaveData, setLeaveData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const storedUser = localStorage.getItem('user');
//         console.log(storedUser);
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));

//             const employeeCode = JSON.parse(storedUser).emp_code;
//             // console.log(employeeCode);
//             if (employeeCode) {
//                 // console.log(employeeCode);
//                 fetchLeaveData(employeeCode);
//             }
//         }
//     }, []);

//     const fetchLeaveData = async (employeeCode) => {
//         try {

//             const url = `https://backend-project-02-1.onrender.com/leavedetails/${employeeCode}`;
//             console.log("Fetching leave data from:", url);
//             const response = await axios.get(url);
//             console.log(response.data);
//             setLeaveData(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching leave data:', error);
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             <Navbar1 />
//             <div className="user-dashboard">
//                 <UserSidebar user={users} />
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : leaveData.length === 0 ? (
//                     <p>No leave requests found.</p>
//                 ) : (
//                     <Table striped bordered hover>
//                         <thead>
//                             <tr>
//                                 <th>Emp Code</th>
//                                 <th>Profile</th>
//                                 <th>Name</th>
//                                 <th>Leave Type</th>
//                                 <th>Start Date</th>
//                                 <th>End Date</th>
//                                 <th>Days of leave</th>
//                                 <th>Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {leaveData.map((leave, index) => (
//                                 <tr key={index}>
//                                     <td>{leave.emp_code}</td>
//                                     <td className="text-center">
//                                         <div className="profile-avatar">
//                                             {leave.name.charAt(0).toUpperCase()}
//                                         </div>
//                                     </td>
//                                     <td>{leave.name}</td>
//                                     <td>{leave.leavetype}</td>

//                                     <td>{new Date(leave.startdate).toLocaleDateString()}</td>
//                                     <td>{new Date(leave.enddate).toLocaleDateString()}</td>



//                                     <td>{leave.daysofleave}</td>
//                                     <td>{leave.status}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </Table>
//                 )}
//             </div>
//         </>
//     );
// }

// export default LeaveForm;
