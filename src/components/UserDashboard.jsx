import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Dashboard/userdashboard.css';
import Navbar1 from './Navbar1';
import UserSidebar from './UserSidebar';
import { Button, Form, Navbar, Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

function UserDashboard() {
  const location = useLocation();

  return (
    <>
      <Navbar1 />
      <div className="user-dashboard">
        <UserSidebar />
        <div className="container">
          <h2 className="user-information-title">User Information</h2>
          <div className="card-container row">
            <div className="col-sm-4">
              <Card style={{ width: '18rem', backgroundColor: 'lightblue' }}>
                <Card.Body>
                  <FontAwesomeIcon icon={faFolder} /> {/* Folder icon */}
                  <Card.Title>Leave balance</Card.Title>
                  <Card.Text>
                    <h1>20</h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-4">
              <Card style={{ width: '18rem', backgroundColor: 'lightgreen' }}>
                <Card.Body>
                  <FontAwesomeIcon icon={faFolder} /> {/* Folder icon */}
                  <Card.Title>Personal leave</Card.Title>
                  <Card.Text>
                    <h1>18</h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-4">
              <Card style={{ width: '18rem', backgroundColor: 'lightcoral' }}>
                <Card.Body>
                  <FontAwesomeIcon icon={faFolder} /> {/* Folder icon */}
                  <Card.Title>Sick leave</Card.Title>
                  <Card.Text>
                    <h1>2</h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          <h3>Time in</h3>
          <h3>Time out</h3>
        </div>
        {/* Timesheet section */}
        <div className="timesheet-section">
          {/* Optional: You can add more folder icons here if needed */}
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
