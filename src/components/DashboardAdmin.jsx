import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar1 from './Navbar1';
import Sidebar from './Sidebar';
function DashboardAdmin() {
  const [adminName, setAdminName] = useState('');

  useEffect(() => {
  
    fetchAdminName();
  }, []);

  const fetchAdminName = async () => {
    try {
      const response = await axios.get('http://localhost:4000/admin/profile');
      console.log(response.data.name);
      setAdminName(response.data.name);
    } catch (error) {
      console.error('Error fetching admin name:', error);
    }
  };
  return (
    <>
    <Navbar1 />
      <div className="admin-dashboard">
        <Sidebar  adminName={adminName}/>

        <h1>
            Hello !!<br/>Admin Dashboard
        </h1>
        </div>
    
    
    </>
    
  )
}

export default DashboardAdmin