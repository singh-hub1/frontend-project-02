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
      const response = await axios.get('https://backend-project-02-1.onrender.com/userProfiles');
      setUserProfiles(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user profiles:', error);
    }
  };

  const fetchAdminName = async () => {
    try {
      const response = await axios.get('https://backend-project-02-1.onrender.com/admin/profile');
      console.log(response.data.name);
      setAdminName(response.data.name);
    } catch (error) {
      console.error('Error fetching admin name:', error);
    }
  };

  const handleEdit = (id) => {
    const profileToEdit = userProfiles.find(profile => profile.id === id);
    setEditedUser(profileToEdit);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const userId = editedUser.id; // Assuming id is already a number
      await axios.put(`https://backend-project-02-1.onrender.com/userProfiles/${userId}`, editedUser);
      fetchUserProfiles();
      setEditedUser(null);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving user profile:', error);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      const userId = parseInt(id); // Convert id to integer
      await axios.delete(`https://backend-project-02-1.onrender.com/userProfiles/${userId}`);
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
                <th>ID</th>
                <th>Username</th>
                <th>Name</th>
                <th>Date of Joining</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userProfiles.map((profile) => (
                <tr key={profile.id}>
                  <td>{profile.id}</td>
                  <td>{profile.username}</td>
                  <td>
                    {isEditing && editedUser.id === profile.id ? (
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
                    {isEditing && editedUser.id === profile.id ? (
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
                    {isEditing && editedUser.id === profile.id ? (
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
                    {isEditing && editedUser.id === profile.id ? (
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
                    {isEditing && editedUser.id === profile.id ? (
                      <>
                        <Button variant="danger" size="sm" onClick={() => handleDelete(profile.id)}>Delete</Button>{' '}
                        <Button variant="success" size="sm" onClick={handleSave}>Save</Button>
                      </>
                    ) : (
                      <Button variant="primary" size="sm" onClick={() => handleEdit(profile.id)}>Edit</Button>
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
