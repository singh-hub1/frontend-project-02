import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import '../Dashboard/admindashboard.css';

import Navbar1 from './Navbar1';
import Sidebar from './Sidebar';

function AdminDashboard() {
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  const fetchUserProfiles = async () => {
    try {
      const response = await axios.get('https://backend-project-02-1.onrender.com/leaveapplications');
      setUserProfiles(response.data);
    } catch (error) {
      console.error('Error fetching user profiles:', error);
    }
  };

  const handleApproveReject = async (userId, action) => {
    try {
      const updatedStatus = action === 'approve' ? 'Approved' : 'Rejected';
      await axios.put(`https://backend-project-02-1.onrender.com/leaveapplications/${userId}`, { status: updatedStatus });
      fetchUserProfiles();
      if (action === 'approve') {
        alert(`Leave application for user with Employee Code ${userId} has been approved.`);
      }
    } catch (error) {
      console.error(`Error ${action} leave application with ID ${userId}:`, error);
    }
  };

  return (
    <>
      <Navbar1 />
      <div className="admin-dashboard">
        <Sidebar />
        <div className="leave-applications">
          <h2>Leave Applications</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Leave Type</th>
                <th>Employee Code</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Days of leave</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userProfiles.map(profile => (
                <tr key={profile.id}>
                  <td>{profile.name}</td>
                  <td>{profile.leavetype}</td>
                  <td>{profile.empcode}</td>
                  <td>{new Date(profile.startdate).toLocaleDateString()}</td>
                  <td>{new Date(profile.enddate).toLocaleDateString()}</td>
                  <td>{profile.daysofleave}</td>
                  <td>
                    <Button variant="success" onClick={() => handleApproveReject(profile.empcode, 'approve')}>Approve</Button>{' '}
                    <Button variant="danger" onClick={() => handleApproveReject(profile.empcode, 'reject')} disabled={profile.status === 'Approved'}>Reject</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
