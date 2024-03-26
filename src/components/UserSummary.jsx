import React from 'react'
import Navbar1 from './Navbar1';
import UserSidebar from './UserSidebar';
function UserSummary() {
  return (
    <>
    <Navbar1 />
      <div className="user-dashboard">
      
        <UserSidebar />
        <h1>
            User Summary
        </h1>
        </div>
    </>
  )
}

export default UserSummary