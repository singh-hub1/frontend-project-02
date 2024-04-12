import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link, useNavigate } from "react-router-dom";
import '../Dashboard/dashboard-admin.css';
import Navbar1 from './Navbar1';
import Sidebar from './Sidebar';
import ProgressBar from "@ramonak/react-progress-bar";

import axios from 'axios';


const DashboardAdmin = () => {
  const percentage = 66;

  const [leaveData, setLeaveData] = useState([]);


  const [approvedData, setApprovedData] = useState([]);

  const [rejectedData, setRejectedData] = useState([]);


  useEffect(() => {
    fetchLeaveData();
    fetchApprovedData();
    fetchRejectedData();
    fetchTrackingLeaves();
  }, []);



  const fetchLeaveData = async () => {
    try {
      const response = await axios.get('https://backend-project-02-1.onrender.com/api/leave-data');
      setLeaveData(response.data);
    } catch (error) {
      console.error('Error fetching leave data:', error);
    }
  };



  const fetchRejectedData = async () => {
    try {
      const response = await axios.get('https://backend-project-02-1.onrender.com/api/Rejected-data');
      setRejectedData(response.data);
    } catch (error) {
      console.error('Error fetching leave data:', error);
    }
  };

  const fetchApprovedData = async () => {
    try {
      const response = await axios.get('https://backend-project-02-1.onrender.com/api/approved-data');
      setApprovedData(response.data);
    } catch (error) {
      console.error('Error fetching leave data:', error);
    }
  };

  const [trackingData, setTrackingData] = useState([])
  const fetchTrackingLeaves = async () => {
    try {
      const response = await axios.get('https://backend-project-02-1.onrender.com/api/tracking-leaves');
      setTrackingData(response.data);
    } catch (error) {
      console.error('Error fetching leave data:', error);
    }
  };


  return (
    <>
      <Navbar1 />
      <div className="admin-dashboard">
        <Sidebar />

        <div className="main-content">
          <div className="row p-2">



            <div className="col-md-4">
              <div className="dashboard-card-11">
                <h3>Summary</h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: 20, width: 60, height: 60 }}>
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}`}
                      styles={buildStyles({
                        textColor: "black",
                        pathColor: "gold",
                        //   trailColor: "gold"
                      })}
                    />
                    <span className="main-1">Pending</span>
                  </div>
                  <div style={{ marginRight: 20, width: 60, height: 60 }}>
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}`}
                      styles={buildStyles({
                        textColor: "black",
                        pathColor: "skyblue",
                        //   trailColor: "gold"
                      })}
                    />
                    <span className="main-1">Approved</span>
                  </div>
                  <div style={{ marginRight: 20, width: 60, height: 60 }}>
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}`}
                      styles={buildStyles({
                        textColor: "black",
                        pathColor: "red",
                        //   trailColor: "gold"
                      })}
                    />
                    <span className="main-1">Declined</span>
                  </div>
                  <div style={{ marginRight: 20, width: 60, height: 60 }}>
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}`}
                      styles={buildStyles({
                        textColor: "black",
                        pathColor: "green",
                        //   trailColor: "gold"
                      })}
                    />
                    <span className="main-1">Available</span>
                  </div>
                </div>
              </div>
            </div>




            <div className="col-md-2">
              <div class="dashboard-card-22">
                <h1 className="text-center">9:30 AM</h1>
                <span className="main-1">Average in time of team</span>
              </div>
            </div>
            <div className="col-md-2">
              <div class="dashboard-card-22">
                <h1 className="text-center">37m</h1>
                <span className="main-1">Teams Average Break time</span>
              </div>
            </div>
            <div className="col-md-2">
              <div class="dashboard-card-22">
                <h1 className="text-center">5h 45m</h1>
                <span className="main-1">Team Average work time</span>
              </div>
            </div>
            <div className="col-md-2">
              <div class="dashboard-card-22">
                <h1 className="text-center">6:30 PM</h1>
                <span className="text-center">Average out time of teams</span>
              </div>
            </div>
          </div>

          
          <div className="row mt-3 p-2">
            <div class="col-md-8">


              <div class="dashboard-card-3">
                <h2 className="text-center">Leaves Tracking</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Emp Code</th>
                      <th>Profile</th>
                      <th style={{ paddingLeft: '30px' }}>Name</th>
                      <th>Leaves Taken</th>
                      <th>Remaining Leaves</th>
                      <th>Leave Meter</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trackingData.map((leave) => (
                      <tr key={leave.employeeCode}>
                        <td className="text-center">{leave.emp_code}</td>

                        <td className="text-center">
                          <div className="profile-avatar">
                            {leave.name.charAt(0).toUpperCase()}
                          </div>
                        </td>

                        <td className="text-center">{leave.name}</td>
                     

                        <td className="text-center">{leave.daysofleave}</td>                    
                        <td className="text-center">{leave.total_leaves - leave.daysofleave}/20</td>
                        <td>
                          <ProgressBar
                            completed={(leave.daysofleave / leave.total_leaves) * 100}
                            bgColor={
                              leave.total_leaves - leave.daysofleave > 15
                                ? "#2ecc71"
                                : leave.total_leaves - leave.daysofleave > 10
                                  ? "#f1c40f"
                                  : "#e74c3c"
                            }
                            labelAlignment="center"
                            labelColor="#060708"
                            height={10}
                            
                          />
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>








            <div class="col-md-4">
              <div class="dashboard-card-3">
                <h2 className="text-center">Pending Leaves</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Emp Code</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Applied Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {leaveData.map((leave) => (
                      <tr key={leave.id}>
                        <td>{leave.emp_code}</td>
                        <td>{leave.name}</td>

                    

                    <td class="status">
                       <span class="pending">{leave.status}</span>
                    </td>

                        <td>{new Date(leave.applied_leave_dates).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>


          </div>


          <div className="row a1">
            <div class="col-md-6">
              <div class="dashboard-card-3">
                <h2 className="text-center">Approved Leaves</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Emp Code</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Applied Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {approvedData.map((leave) => (
                      <tr key={leave.id}>
                        <td>{leave.emp_code}</td>
                        <td>{leave.name}</td>

                     

                        <td class="status">
                     <span class="approved">{leave.status}</span>
                     </td>

                        <td>{new Date(leave.applied_leave_dates).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>







            <div class="col-md-6">
              <div class="dashboard-card-3">
                <h2 className="text-center">Declined Leaves</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Emp Code</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Applied Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rejectedData.map((leave) => (
                      <tr key={leave.id}>
                        <td>{leave.emp_code}</td>
                        <td>{leave.name}</td>

                        
                        <td class="status">
                       <span class="decline">{leave.status}</span>
                     </td>
                        <td>{new Date(leave.applied_leave_dates).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default DashboardAdmin;







// <>
//       <Navbar1 />
//       <div className="admin-dashboard">
//         <Sidebar adminName={adminName} />
//         <div className="main-content">
//           <div className="row p-2">
//             <div className="col-md-4">
//               <div className="dashboard-card-11">
//                 <h3>Summary</h3>
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   <div style={{ marginRight: 20, width: 60, height: 60 }}>
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}`}
//                       styles={buildStyles({
//                         textColor: "black",
//                         pathColor: "gold",
//                         //   trailColor: "gold"
//                       })}
//                     />
//                     <span className="main-1">Pending</span>
//                   </div>
//                   <div style={{ marginRight: 20, width: 60, height: 60 }}>
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}`}
//                       styles={buildStyles({
//                         textColor: "black",
//                         pathColor: "skyblue",
//                         //   trailColor: "gold"
//                       })}
//                     />
//                     <span className="main-1">Approved</span>
//                   </div>
//                   <div style={{ marginRight: 20, width: 60, height: 60 }}>
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}`}
//                       styles={buildStyles({
//                         textColor: "black",
//                         pathColor: "red",
//                         //   trailColor: "gold"
//                       })}
//                     />
//                     <span className="main-1">Declined</span>
//                   </div>
//                   <div style={{ marginRight: 20, width: 60, height: 60 }}>
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}`}
//                       styles={buildStyles({
//                         textColor: "black",
//                         pathColor: "green",
//                         //   trailColor: "gold"
//                       })}
//                     />
//                     <span className="main-1">Available</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-2">
//             <div class="dashboard-card-22">
//               <h1 className="text-center">9:30 AM</h1>
//               <span className="main-1">Average in time of team</span>
//             </div>
//             </div>
//             <div className="col-md-2">
//             <div class="dashboard-card-22">
//               <h1 className="text-center">37m</h1>
//               <span className="main-1">Teams Average Break time</span>
//             </div>
//             </div>
//             <div className="col-md-2">
//             <div class="dashboard-card-22">
//               <h1 className="text-center">5h 45m</h1>
//               <span className="main-1">Team Average work time</span>
//             </div>
//             </div>
//             <div className="col-md-2">
//             <div class="dashboard-card-22">
//               <h1 className="text-center">6:30 PM</h1>
//               <span className="text-center">Average out time of teams</span>
//             </div>
//             </div>
//           </div>
//           <div className="row mt-3 p-2">
//           <div class="col-md-6">
//           <div class="dashboard-card-3">
//               <h2 className="text-center">Leaves Tracking</h2>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Emp Code</th>
//                     <th>Total</th>
//                     <th>Remain</th>
//                     <th>Remaining leaves</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td data-name="Name">Tanya</td>
//                     <td data-name="Position">Technical Officer</td>
//                     <td data-name="Office">Gurgaon</td>
//                     <td data-name="Age">66</td>
//                     <td class="status">
//                       {" "}
//                       <ProgressBar completed={60} />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td data-name="Name">Deepak</td>
//                     <td data-name="Position">Regional Marketing</td>
//                     <td data-name="Office">New Delhi</td>
//                     <td data-name="Age">27</td>
//                     <td class="status">
//                       <span class="pending">Pending</span>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td data-name="Name">Ankit</td>
//                     <td data-name="Position">Sales Support</td>
//                     <td data-name="Office">Chennai</td>
//                     <td data-name="Age">45</td>
//                     <td class="status">
//                       <span class="approved">Approved</span>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td data-name="Name">Naveen</td>
//                     <td data-name="Position">System Admin</td>
//                     <td data-name="Office">Hyderabad</td>
//                     <td data-name="Age">33</td>
//                     <td class="status">
//                       <span class="approved">Approved</span>
//                     </td>
//                   </tr>

//                   <tr>
//                     <td data-name="Name">Arti</td>
//                     <td data-name="Position">Support Assistant</td>
//                     <td data-name="Office">Pune</td>
//                     <td data-name="Age">24</td>
//                     <td class="status">
//                       <span class="decline">Decline</span>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td data-name="Name">Aditi</td>
//                     <td data-name="Position">Team Leader</td>
//                     <td data-name="Office">Noida</td>
//                     <td data-name="Age">55</td>
//                     <td class="status">
//                       <span class="decline">Decline</span>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div class="col-md-6">
//           <div class="dashboard-card-3">
//               <h2 className="text-center">Pending Leaves</h2>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Position</th>
//                     <th>Status</th>
//                     <th>Start Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td data-name="Name">Tanya</td>
//                     <td data-name="Position">Technical Officer</td>

//                     <td class="status">
//                       <span class="pending">Pending</span>
//                     </td>
//                     <td data-name="Joining Date">2009/01/02</td>
//                   </tr>
//                   <tr>
//                     <td data-name="Name">Deepak</td>
//                     <td data-name="Position">Regional Marketing</td>

//                     <td class="status">
//                       <span class="pending">Pending</span>
//                     </td>
//                     <td data-name="Joining Date">2011/03/17</td>
//                   </tr>
//                   <tr>
//                     <td data-name="Name">Deepak</td>
//                     <td data-name="Position">Regional Marketing</td>

//                     <td class="status">
//                       <span class="pending">Pending</span>
//                     </td>
//                     <td data-name="Joining Date">2011/03/17</td>
//                   </tr>
//                   <tr>
//                     <td data-name="Name">Deepak</td>
//                     <td data-name="Position">Regional Marketing</td>

//                     <td class="status">
//                       <span class="pending">Pending</span>
//                     </td>
//                     <td data-name="Joining Date">2011/03/17</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             </div>
//           </div>
//           <div className="row a1">
//           <div class="col-md-6">
//           <div class="dashboard-card-3">
//               <h2 className="text-center">Approved Leaves</h2>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Position</th>
//                     <th>Status</th>
//                     <th>Start Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td data-name="Name">Ankit</td>
//                     <td data-name="Position">Sales Support</td>

//                     <td class="status">
//                       <span class="approved">Approved</span>
//                     </td>
//                     <td data-name="Joining Date">2011/12/12</td>
//                   </tr>
//                   <tr>
//                     <td data-name="Name">Naveen</td>
//                     <td data-name="Position">System Admin</td>

//                     <td class="status">
//                       <span class="approved">Approved</span>
//                     </td>
//                     <td data-name="Joining Date">2009/02/27</td>
//                   </tr>
//                 </tbody>
//               </table>
//               </div>
//           </div>
//           <div class="col-md-6">
//           <div class="dashboard-card-3">
//           <h2 className="text-center">Declined Leaves</h2>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Position</th>
//                     <th>Status</th>
//                     <th>Start Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td data-name="Name">Arti</td>
//                     <td data-name="Position">Support Assistant</td>

//                     <td class="status">
//                       <span class="decline">Decline</span>
//                     </td>
//                     <td data-name="Joining Date">2008/12/13</td>
//                   </tr>
//                   <tr>
//                     <td data-name="Name">Aditi</td>
//                     <td data-name="Position">Team Leader</td>

//                     <td class="status">
//                       <span class="decline">Decline</span>
//                     </td>
//                     <td data-name="Joining Date">2010/09/20</td>
//                   </tr>
//                 </tbody>
//               </table>
//               </div>
//           </div>
//           </div>
//         </div>
      
//       </div>
      
//     </>











