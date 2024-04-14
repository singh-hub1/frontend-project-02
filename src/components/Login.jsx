import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form, Image } from 'react-bootstrap';
import Header from './Header';
import '../Hrms/Admin.css';
import homelogo from "../Images/Picture4.png";
function Login() {
  const [error, setError] = useState('');
  const [userProfiles, setUserProfiles] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // console.log("heelo inside thet try block");  //This is for testing purpose 
      const response = await axios.post('http://localhost:4000/adminlogin', formData);
      console.log('Form submitted successfully');

      if (response.data.success) {
        // Fetch user profiles after successful
        // const userProfileResponse = await axios.get('http:localhost:4000/userProfiles');
        // setUserProfiles(userProfileResponse.data);
        // console.log(userProfileResponse.data);
        navigate('/admindashboard/DashboardAdmin');
      } else {
        setError('Incorrect username or password');
      }
    } catch (error) {
      console.error('Error submitting form:', error);

      if (error.response && error.response.status === 401) {
        console.log('invalid username ');
        setError('Incorrect username or password');
      } else {
        setError('An error occurred while logging in');
      }
    }
  };

  return (
    <div className="employee-dashboard">
      <Header />
      <div className="employee-login">
      <Image  className="logo" src={homelogo} alt="Logo" />
        <div className="admin-container">
          <button className="Blitz-admin" type="submit" onClick={() => navigate('/employeeLogin')}>
            Blitz Admin
          </button>
          <form onSubmit={handleSubmit} className="blitz-form">
            <input
              type="text"
              className="form-input"
              placeholder="Username"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-input"
              placeholder="Password"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit" className="form-submit">
              Login
            </button>
          </form>
          {/* <span className="txt">Forget your password?</span> */}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
