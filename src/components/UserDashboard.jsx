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
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function UserDashboard() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);



  const handleTimeInClick = () => {
    const confirmation = window.confirm("Are you sure you want to Time in?");
    if (confirmation) {
      const storedUser = localStorage.getItem('user');
      console.log(storedUser);

      const employeeCode = JSON.parse(storedUser).emp_code;
      console.log(employeeCode);

      const employeeUsername = JSON.parse(storedUser).username;
      console.log(employeeUsername);

      const url = `https://backend-project-02-1.onrender.com/timein`;
     

        // Prepare data to send to the backend
    const requestData = {
      employeeCode: employeeCode,
      employeeUsername: employeeUsername
    };
      const response =  axios.post(url, requestData);
      console.log(response.data);


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
     

        // Prepare data to send to the backend
    const requestData = {
      employeeCode: employeeCode,
      employeeUsername: employeeUsername
    };
      const response =  axios.post(url, requestData);
      console.log(response.data);

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
     

        // Prepare data to send to the backend
    const requestData = {
      employeeCode: employeeCode,
      employeeUsername: employeeUsername
    };
      const response =  axios.post(url, requestData);
      console.log(response.data);
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
      const response =  axios.post(url, requestData);
      console.log(response.data);
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

              <div className="user-dashboard-card-11" style={{ backgroundColor: '#9AD0C2' }}>
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
                    <Card style={{ width: '250px', height: '200px', backgroundColor: '#e0f2f1' }}>
                      <Card.Body>
                        <Card.Title>Sick Leave</Card.Title>
                        <Card.Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "50px" }}>
                          7
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>

                  <div className="col-md-3">
                    <Card style={{ width: '250px', height: '200px', backgroundColor: '#f9e4b7' }}>
                      <Card.Body>
                        <Card.Title>Personal Leave</Card.Title>
                        <Card.Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "50px" }}>
                          5
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>


                  <div className="col-md-3">
                    <Card style={{ width: '280px', height: '200px', backgroundColor: '#AFD198' }}>
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

                  <div className="col-md-4" >


                    <Card onClick={handleTimeInClick} className="time-line-card" style={{ border: "none" }}>
                      <Card.Body>
                        <Card.Title>Time in</Card.Title>
                        <Card.Text>
                          <BsForward style={{ fontSize: "40px", marginRight: "10px" }} />
                          <FaFolderOpen style={{ fontSize: "40px" }} />
                        </Card.Text>
                      </Card.Body>
                    </Card>

                  </div>

                  <div className="col-md-4" >


                    <Card onClick={handleTimeOutClick}className="time-line-card" style={{ border: "none" }}>
                      <Card.Body>
                        <Card.Title>Time out</Card.Title>
                        <Card.Text>
                          <FaFolderOpen style={{ fontSize: "40px", marginRight: "10px" }} />
                          <BsForward style={{ fontSize: "40px", marginRight: "10px" }} />
                          <IoFastFoodOutline onClick={handleTeaBreakClick} style={{ fontSize: "40px", marginRight: "10px" }} />
                          <LiaSmokingSolid onClick={handleSmokingBreakClick}style={{ fontSize: "40px", marginRight: "10px" }} />
                        </Card.Text>

                      </Card.Body>
                    </Card>

                  </div>


                  <div className="col-md-4" >


                    <Card className="time-line-card" style={{ border: "none" }}>
                      <Card.Body>
                        <Card.Title>View timesheet</Card.Title>
                        <Card.Text>
                          9:30 AM: Timed in.
                          <br />
                          10:30 Smoking break
                          <br />
                          10:45: Timed in

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
