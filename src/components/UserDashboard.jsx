import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Dashboard/userdashboard.css';
import Navbar1 from './Navbar1';
import UserSidebar from './UserSidebar';
import { Card } from 'react-bootstrap';
import { BsForward } from "react-icons/bs";
import { FaFolderOpen } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { LiaSmokingSolid } from "react-icons/lia";
import 'react-calendar/dist/Calendar.css';

function UserDashboard() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [timesheetData, setTimesheetData] = useState([]);

  useEffect(() => {

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
   
    fetchTimesheetData();
  }, []);

 
  const fetchTimesheetData = async () => {
    try {
      const storedUser = localStorage.getItem('user');
      const employeeCode = JSON.parse(storedUser).emp_code;
      const employeeUsername = JSON.parse(storedUser).username;
      const url = `https://backend-project-02-1.onrender.com/timesheet?employeeCode=${employeeCode}&employeeUsername=${employeeUsername}`;

      const response = await axios.get(url);
      setTimesheetData(response.data);
      // window.location.reload();
    } catch (error) {
      console.error('Error fetching timesheet data:', error);
    }
  };

const handleTimeInClick = async () => {
  const confirmation = window.confirm("Are you sure you want to Time in?");
  if (confirmation) {
    try {
      const storedUser = localStorage.getItem('user');
      console.log(storedUser);

      const employeeCode = JSON.parse(storedUser).emp_code;
      console.log(employeeCode);

      const employeeUsername = JSON.parse(storedUser).username;
      console.log(employeeUsername);

      const url = `https://backend-project-02-1.onrender.com/timein`;

      const requestData = {
        employeeCode: employeeCode,
        employeeUsername: employeeUsername
      };
      const response = await axios.post(url, requestData);
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      // Handle errors here
    }
  } else {
    // Handle "No" option or do nothing
    // You can add your logic here for "No" option or just leave it blank if no action required
  }
};


  const handleTimeOutClick = () => {
    const confirmation = window.confirm("Are you sure you want to Time out?");
    if (confirmation) {
      const storedUser = localStorage.getItem('user');
      console.log(storedUser);

      const employeeCode = JSON.parse(storedUser).emp_code;
      console.log(employeeCode);

      const employeeUsername = JSON.parse(storedUser).username;
      console.log(employeeUsername);

      const url = `https://backend-project-02-1.onrender.com/timeout`;

         const requestData = {
        employeeCode: employeeCode,
        employeeUsername: employeeUsername
      };
      const response = axios.post(url, requestData);
      console.log(response.data);
      window.location.reload();
    } else {
      // Handle "No" option or do nothing
      // You can add your logic here for "No" option or just leave it blank if no action required
    }
  };


  const handleTeaBreakClick = () => {
    const confirmation = window.confirm("Are you sure you want to Tea Break?");
    if (confirmation) {
      const storedUser = localStorage.getItem('user');
      console.log(storedUser);

      const employeeCode = JSON.parse(storedUser).emp_code;
      console.log(employeeCode);

      const employeeUsername = JSON.parse(storedUser).username;
      console.log(employeeUsername);

      const url = `https://backend-project-02-1.onrender.com/teabreak`;



      const requestData = {
        employeeCode: employeeCode,
        employeeUsername: employeeUsername
      };
      const response = axios.post(url, requestData);
      console.log(response.data);
      window.location.reload();
    } else {
      // Handle "No" option or do nothing
      // You can add your logic here for "No" option or just leave it blank if no action required
    }
  };


  const handleSmokingBreakClick = () => {
    const confirmation = window.confirm("Are you sure you want to Smoking Break?");
    if (confirmation) {
      const storedUser = localStorage.getItem('user');
      console.log(storedUser);

      const employeeCode = JSON.parse(storedUser).emp_code;
      console.log(employeeCode);

      const employeeUsername = JSON.parse(storedUser).username;
      console.log(employeeUsername);

      const url = `https://backend-project-02-1.onrender.com/smokingbreak`;


      // Prepare data to send to the backend
      const requestData = {
        employeeCode: employeeCode,
        employeeUsername: employeeUsername
      };
      const response = axios.post(url, requestData);
      console.log(response.data);
      window.location.reload();
    } else {
      // Handle "No" option or do nothing
      // You can add your logic here for "No" option or just leave it blank if no action required
    }
  }
  return (
    <>
      <Navbar1 />
      <div className="admin-dashboard">
        <UserSidebar user={user} />
        <div className="main-content">
          <div className="">

            <div className="col-md-11">

              <div className="user-dashboard-card-11" style={{ backgroundColor: 'white' }}>
                <h3>Time off balance</h3>

                <div style={{ display: "flex", alignItems: "center" }}>

                  <div className="col-md-3">
                    <Card style={{ width: '250px', height: '200px', backgroundColor: '#f2f2f2' }}>
                      <Card.Body>
                        <Card.Title>Leave Balance</Card.Title>
                        <Card.Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "50px" }}>
                          20
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>

                  <div className="col-md-3">
                    <Card style={{ width: '250px', height: '200px', backgroundColor: '#f2f2f2' }}>
                      <Card.Body>
                        <Card.Title>Sick Leave</Card.Title>
                        <Card.Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "50px" }}>
                          7
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>

                  <div className="col-md-3">
                    <Card style={{ width: '250px', height: '200px', backgroundColor: '#f2f2f2' }}>
                      <Card.Body>
                        <Card.Title>Personal Leave</Card.Title>
                        <Card.Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "50px" }}>
                          5
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>


                  <div className="col-md-3">
                    <Card style={{ width: '280px', height: '200px', backgroundColor: '#f2f2f2' }}>
                      <Card.Body>
                        <Card.Text>
                          {/* <Calendar style={{ width: '100%', height: '100%' }} /> */}
                          <h3>Announcements</h3>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>

                </div>

              </div>

            </div>



            <div className="col-md-11">

              <div className="user-dashboard-card-12 " >

                <h3>Timesheet</h3>

                <div style={{ display: "flex", alignItems: "center" }}>

                  <div className="col-md-3" >


                    <Card style={{ border: "none" }}>
                      <Card.Body>
                        <Card.Title>Time in</Card.Title>
                        <Card.Text>
                          <BsForward style={{ fontSize: "40px", marginRight: "10px" }} />
                          <FaFolderOpen onClick={handleTimeInClick} style={{ fontSize: "40px" }} />
                        </Card.Text>
                      </Card.Body>
                    </Card>

                  </div>

                  <div className="col-md-3" >


                    <Card className="time-line-card" style={{ border: "none" }}>
                      <Card.Body>
                        <Card.Title>Time out</Card.Title>
                        <Card.Text>
                          <FaFolderOpen onClick={handleTimeOutClick} style={{ fontSize: "40px", marginRight: "10px" }} />
                          <BsForward style={{ fontSize: "40px", marginRight: "10px" }} />
                          <IoFastFoodOutline onClick={handleTeaBreakClick} style={{ fontSize: "40px", marginRight: "10px" }} />
                          <LiaSmokingSolid onClick={handleSmokingBreakClick} style={{ fontSize: "40px", marginRight: "10px" }} />
                        </Card.Text>

                      </Card.Body>
                    </Card>

                  </div>


                  <div className="col-md-3" >


                    <Card className="time-line-card" style={{ border: "none", marginLeft: '150px' }}>
                      <Card.Body>
                        <Card.Title>View timesheet</Card.Title>
                        <Card.Text>

                          {timesheetData.map((index) => (
                            <div key={index}>
                          <strong>Time in :</strong> {index.time_in}
                              <br />
                          <strong>Time out :</strong> {index.time_out}
                              <br />
                          <strong> Tea Break :</strong> {index.tea_break}
                              <br />
                          <strong> Smoking Break : </strong>  {index.smoking_break}
                            </div>
                          ))}

                        </Card.Text>

                      </Card.Body>
                    </Card>

                  </div>


                </div>


              </div>

            </div>





          </div>








        </div>



      </div>
    </>
  );
}

export default UserDashboard;
