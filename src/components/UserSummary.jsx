import React, { useState, useEffect } from "react";
import Navbar1 from './Navbar1';
import UserSidebar from './UserSidebar';
function UserSummary() {


  const [user, setUser] = useState(null);

  useEffect(() => {
   
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  return (
    <>
    <Navbar1 />
      <div className="user-dashboard">
      
        <UserSidebar user={user}/>
        <h1>
            User Summary
        </h1>
        </div>
    </>
  )
}

export default UserSummary