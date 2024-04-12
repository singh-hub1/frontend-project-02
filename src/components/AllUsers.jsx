import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Navbar, Card } from 'react-bootstrap';
import '../Dashboard/admindashboard.css';
import Navbar1 from './Navbar1';
import Sidebar from './Sidebar';


function AllUsers() {
  const [userProfiles, setUserProfiles] = useState([]);
  const [editedUser, setEditedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [adminName, setAdminName] = useState('');

  useEffect(() => {
    fetchUserProfiles();
    fetchAdminName();
  }, []);

  const fetchUserProfiles = async () => {
    try {
      const response = await axios.get('http://localhost:4000/userProfiles');
      setUserProfiles(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user profiles:', error);
    }
  };

  const fetchAdminName = async () => {
    try {
      const response = await axios.get('http://localhost:4000/admin/profile');
      console.log(response.data.name);
      setAdminName(response.data.name);
    } catch (error) {
      console.error('Error fetching admin name:', error);
    }
  };

  const handleEdit = (emp_code) => {
    const profileToEdit = userProfiles.find(profile => profile.emp_code === emp_code);
    setEditedUser(profileToEdit);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const userId = editedUser.emp_code; // Assuming id is already a number
      await axios.put(`http://localhost:4000/userProfiles/${userId}`, editedUser);
      fetchUserProfiles();
      setEditedUser(null);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving user profile:', error);
    }
  };
  
  const handleDelete = async (emp_code) => {
    try {
      const userId = parseInt(emp_code); // Convert id to integer
      await axios.delete(`http://localhost:4000/userProfiles/${userId}`);
      fetchUserProfiles();
    } catch (error) {
      console.error('Error deleting user profile:', error);
    }
  };
  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
     <Navbar1 />
      <div className="admin-dashboard">
        <Sidebar adminName={adminName} />
        <div className="main-content">
          <h2 className="text-center">User Profiles</h2>
        
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Emp Code</th>
                <th>Username</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Date of Joining</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userProfiles.map((profile) => (
                <tr key={profile.emp_code}>
                  <td>{profile.emp_code}</td>
                  <td>{profile.username}</td>

                  <td className="text-center">
                          <div className="profile-avatar">
                            {profile.name.charAt(0).toUpperCase()}
                          </div>
                        </td>


                  <td>
                    {isEditing && editedUser.emp_code === profile.emp_code ? (
                      <Form.Control
                        type="text"
                        name="name"
                        value={editedUser.name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      profile.name
                    )}
                  </td>
                  <td>
                    {isEditing && editedUser.emp_code === profile.emp_code ? (
                      <Form.Control
                        type="text"
                        name="dateofjoining"
                        value={editedUser.dateofjoining}
                        onChange={handleInputChange}
                      />
                    ) : (
                      profile.dateofjoining
                    )}
                  </td>
                  <td>
                    {isEditing && editedUser.emp_code === profile.emp_code ? (
                      <Form.Control
                        type="text"
                        name="designation"
                        value={editedUser.designation}
                        onChange={handleInputChange}
                      />
                    ) : (
                      profile.designation
                    )}
                  </td>
                  <td>
                    {isEditing && editedUser.emp_code === profile.emp_code ? (
                      <Form.Control
                        type="text"
                        name="department"
                        value={editedUser.department}
                        onChange={handleInputChange}
                      />
                    ) : (
                      profile.department
                    )}
                  </td>
                  <td>
                    {isEditing && editedUser.emp_code === profile.emp_code ? (
                      <>
                        <Button variant="danger" size="sm" onClick={() => handleDelete(profile.emp_code)}>Delete</Button>{' '}
                        <Button variant="success" size="sm" onClick={handleSave}>Save</Button>
                      </>
                    ) : (
                      // <Button variant="primary" size="sm" onClick={() => handleEdit(profile.emp_code)}>Edit</Button>
                      <Button variant="warning" size="sm" onClick={() => handleEdit(profile.emp_code)}>
                      Edit
                    </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </>
  );
}

export default AllUsers;
