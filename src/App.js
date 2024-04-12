import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Login from './components/Login'



import Start from './components/Start'
import EmployeeDetail from './components/EmployeeDetail'
import EmployeeLogin from './components/EmployeeLogin'
import './index.css';
import './components/style.css'
import User from './components/User'

import Accounts from './components/Accounts'
import Learning from './components/Learning'
import UserDashboard from './components/UserDashboard'
import AdminDashboard from './components/AdminDashboard'
import Navbar from './components/Navbar1'
import Sidebar from './components/Sidebar'
import AllUsers from './components/AllUsers'
import AddUserForm from './components/AddUserForm'
import UserSidebar from './components/UserSidebar'
import LeaveForm from './components/LeaveForm'
import LeaveDetails from './components/LeaveDetails'
import DashboardAdmin from './components/DashboardAdmin'
import UserSummary from './components/UserSummary'

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/employeeLogin' element={<EmployeeLogin />}></Route>

        <Route path='/employeedetail' element={<EmployeeDetail />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/accounts' element={<Accounts />}></Route>
        <Route path='/learning' element={<Learning />}></Route>


        <Route path="/admindashboard" element={<AdminDashboard />} />

        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Sidebar" element={<Sidebar />} />

        <Route path="/admindashboard/AllUsers" element={<AllUsers />} />
        <Route path="/admindashboard/AddUserForm" element={<AddUserForm />} />

        <Route path="/UserSidebar" element={<UserSidebar />} />

        <Route path="/UserDashboard/LeaveForm" element={<LeaveForm />} />

        <Route path="/UserDashboard/LeaveDetails" element={<LeaveDetails />} />

        <Route path="/admindashboard/DashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/UserDashboard/summary" element={<UserSummary />} />


        {/* <Route path="/DasBoard" element={<DasBoard />} /> */}

        {/* <Route path='/dasboard' element={<Dashboard />}>

          <Route path='' element={<Home />}></Route>
          <Route path='/employee' element={<Employee />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/create' element={<AddEmployee />}></Route>
          <Route path='/employeeEdit/:id' element={<EditEmployee />}> </Route>
            
        </Route> */}

        <Route path='/login' element={<Login />}></Route>
        <Route path='/start' element={<Start />}></Route>
        <Route path='/employeeLogin' element={<EmployeeLogin />}></Route>
        <Route path='/employeedetail/:id' element={<EmployeeDetail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
