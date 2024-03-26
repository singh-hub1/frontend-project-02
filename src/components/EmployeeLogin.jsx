import React, { useState } from 'react'
// import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Row, Col, Form, Image } from "react-bootstrap";
import Header from './Header';
import '../Hrms/employeeLogin.css'

function EmployeeLogin() {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  axios.defaults.withCredentials = true;
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    // axios.post('http://localhost:8081/employeelogin', values)
    // .then(res => {
    //     if(res.data.Status === 'Success') {
    //         const id = res.data.id;
    //         navigate('/employeedetail/'+id);
    //     } else {
    //         setError(res.data.Error);
    //     }
    // })
    // .catch(err => console.log(err));
  }

  return (
    <div className='employee-dashboard'>
      < Header />

      <div className="employee-login">
        <img className="logo" src="/Images/logo-blitz.png" alt="Logo" />

        <div className='content'>
          <Button className='Admin-btn' variant="primary" size="lg"  onClick={() => navigate("/login")}>
            Admin Login
          </Button>

          {/* User Login button */}
          <Button className='User-btn' variant="primary" size="lg"  onClick={() => navigate("/User")}>
            User Login
          </Button>
          <br />
          <br />
          <p  className='paragraph-text'>
            Choose your role to login using your credentials. <br/>If you don't 
            have your login credentials, sign up below.
          </p>

          {/* <br />
          <br /> */}
          <Button
          className='Newuser-btn'
            variant="primary"
            size="lg"
            onClick={() => navigate("/employeedetail")}
           
          >
            New user sign up
          </Button>

        </div>


      </div>






    </div>



  )
}

export default EmployeeLogin