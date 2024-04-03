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

const DashboardAdmin = () => {
  const percentage = 66;

  useEffect(() => {
    // You can fetch leave data from an API and update the state accordingly
    // For demonstration, I'm using dummy data
  }, []);

  return (
    <>
      <Navbar1 />
      <div className="d-flex">
        <Sidebar />
        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h3 style={{ marginTop: '-20px' }}>Summary</h3>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '-10px' }}>
              <div style={{ marginRight: 20, width: 60, height: 60 }}>
                <CircularProgressbar value={percentage} text={`${percentage}`} styles={buildStyles({
                  textColor: "black",
                  pathColor: "gold"
                })} />
                <span className='main-1'>Pending</span>
              </div>
              <div style={{ marginRight: 20, width: 60, height: 60 }}>
                <CircularProgressbar value={percentage} text={`${percentage}`} styles={buildStyles({
                  textColor: "black",
                  pathColor: "skyblue",
                })} />
                <span className='main-1'>Approved</span>
              </div>
              <div style={{ marginRight: 20, width: 60, height: 60 }}>
                <CircularProgressbar value={percentage} text={`${percentage}`} styles={buildStyles({
                  textColor: "black",
                  pathColor: "red",
                })} />
                <span className='main-1'>Declined</span>
              </div>
              <div style={{ width: 60, height: 60 }}>
                <CircularProgressbar value={percentage} text={`${percentage}`} styles={buildStyles({
                  textColor: "black",
                  pathColor: "green",
                })} />
                <span className='main-1'>Available</span>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <h1 className='main'>9:30 AM</h1>
            <span className='main-1'>Average in time of team</span>
          </div>
          <div className="dashboard-card">
            <h1 className='main'>37m</h1>
            <span className='main-1'>Teams Average Break time</span>
          </div>
          <div className="dashboard-card">
            <h1 className='main'>5h 45m</h1>
            <span className='main-1'>Team Average work time</span>
          </div>
          <div className="dashboard-card">
            <h1 className='main'>6:30 PM</h1>
            <span className='main-1'>Average out time of teams</span>
          </div>




          <div class="dashboard-card-2">
            <h2>Leaves Tracking</h2>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Status</th>
                  <th>Start Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-name="Name">Tanya</td>
                  <td data-name="Position">Technical Officer</td>
                  <td data-name="Office">Gurgaon</td>
                  <td data-name="Age">66</td>
                  <td class="status"><span class="pending">Pending</span></td>
                  <td data-name="Joining Date">2009/01/02</td>
                </tr>
                <tr>
                  <td data-name="Name">Deepak</td>
                  <td data-name="Position">Regional Marketing</td>
                  <td data-name="Office">New Delhi</td>
                  <td data-name="Age">27</td>
                  <td class="status"><span class="pending">Pending</span></td>
                  <td data-name="Joining Date">2011/03/17</td>
                </tr>
                <tr>
                  <td data-name="Name">Ankit</td>
                  <td data-name="Position">Sales Support</td>
                  <td data-name="Office">Chennai</td>
                  <td data-name="Age">45</td>
                  <td class="status"><span class="approved">Approved</span></td>
                  <td data-name="Joining Date">2011/12/12</td>
                </tr>
                <tr>
                  <td data-name="Name">Naveen</td>
                  <td data-name="Position">System Admin</td>
                  <td data-name="Office">Hyderabad</td>
                  <td data-name="Age">33</td>
                  <td class="status"><span class="approved">Approved</span></td>
                  <td data-name="Joining Date">2009/02/27</td>
                </tr>



                <tr>
                  <td data-name="Name">Arti</td>
                  <td data-name="Position">Support Assistant</td>
                  <td data-name="Office">Pune</td>
                  <td data-name="Age">24</td>
                  <td class="status"><span class="decline">Decline</span></td>
                  <td data-name="Joining Date">2008/12/13</td>
                </tr>
                <tr>
                  <td data-name="Name">Aditi</td>
                  <td data-name="Position">Team Leader</td>
                  <td data-name="Office">Noida</td>
                  <td data-name="Age">55</td>
                  <td class="status"><span class="decline">Decline</span></td>
                  <td data-name="Joining Date">2010/09/20</td>
                </tr>
              </tbody>
            </table>


          </div>




          <div class="dashboard-card-2">
            <h2>Pending Leaves</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Start Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-name="Name">Tanya</td>
                  <td data-name="Position">Technical Officer</td>

                  <td class="status"><span class="pending">Pending</span></td>
                  <td data-name="Joining Date">2009/01/02</td>
                </tr>
                <tr>
                  <td data-name="Name">Deepak</td>
                  <td data-name="Position">Regional Marketing</td>

                  <td class="status"><span class="pending">Pending</span></td>
                  <td data-name="Joining Date">2011/03/17</td>
                </tr>

              </tbody>
            </table>


          </div>



          <div class="dashboard-card-2">
            <h2 className='text-center'>Approved Leaves</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Start Date</th>
                </tr>
              </thead>
              <tbody>


                <tr>
                  <td data-name="Name">Ankit</td>
                  <td data-name="Position">Sales Support</td>

                  <td class="status"><span class="approved">Approved</span></td>
                  <td data-name="Joining Date">2011/12/12</td>
                </tr>
                <tr>
                  <td data-name="Name">Naveen</td>
                  <td data-name="Position">System Admin</td>

                  <td class="status"><span class="approved">Approved</span></td>
                  <td data-name="Joining Date">2009/02/27</td>
                </tr>




              </tbody>
            </table>



            <h2 className='mt-5 mb-5'>Declined Leaves</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Start Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-name="Name">Arti</td>
                  <td data-name="Position">Support Assistant</td>

                  <td class="status"><span class="decline">Decline</span></td>
                  <td data-name="Joining Date">2008/12/13</td>
                </tr>

                <tr>
                  <td data-name="Name">Aditi</td>
                  <td data-name="Position">Team Leader</td>

                  <td class="status"><span class="decline">Decline</span></td>
                  <td data-name="Joining Date">2010/09/20</td>
                </tr>

              </tbody>

            </table>

          </div>
        </div>
      </div>





    


    </>
  );
}

export default DashboardAdmin;
















