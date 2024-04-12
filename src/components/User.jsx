import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form, Image, Modal } from "react-bootstrap";
import Header from './Header';
import '../Hrms/Admin.css';
import homelogo from "../Images/Picture4.png";

function Login() {

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [showResetPassword, setShowResetPassword] = useState(false);

  const [resetPasswordFormData, setResetPasswordFormData] = useState({
    username: '',
    newpassword: ''

  });

  const handleResetPasswordChange = (e) => {
    setResetPasswordFormData({ ...resetPasswordFormData, [e.target.name]: e.target.value });
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post('https://backend-project-02-1.onrender.com/resetpassword', resetPasswordFormData);
      console.log('Password reset successful');
      setShowResetPassword(false);
      setError('');
    } catch (error) {
      console.error('Error resetting password:', error);
      setError('An error occurred while resetting the password');
    }
  };




  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSuccessfulLogin = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('valid', true);
    navigate('/UserDashboard', { state: { user } });
 
  };


  


  const handleSubmit = async (e) => {

    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('https://backend-project-02-1.onrender.com/userlogin', formData);
      console.log('Form submitted successfully');

      if (response.data.success) {         
            localStorage.setItem('user', JSON.stringify(response.data.user));
            console.log(response.data.user);
            handleSuccessfulLogin(response.data.user);
            // navigate("/UserDashboard", { state: { user: response.data.user } }); 
            // navigate("/UserDashboard");
        }
           else {
        setError('Incorrect username or password');
      }
    } catch (error) {
      console.error('Error submitting form:', error);

      if (error.response && error.response.status === 401) {
        console.log("invalid username ");
        setError('Incorrect username or password');
      } else {
        setError('An error occurred while logging in');
      }
    }
  };

  return (
    <div className='employee-dashboard'>
      <Header />
      <div className="employee-login">
      <Image  className="logo" src={homelogo} alt="Logo" />
        <div className=" admin-container">
          <button className='Blitz-admin' type="submit" onClick={() => navigate("/employeeLogin")}>Blitz User</button>
          <form onSubmit={handleSubmit} className=" blitz-form">
            <input
              type="text"
              className='form-input'
              placeholder="Username"
              required
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="password"
              className='form-input'
              placeholder="Password"
              required
              name='password'
              value={formData.password}
              onChange={handleChange}
            // autocomplete="current-password"
            />
            <button type="submit" className='form-submit'>Login</button>
          </form>
          <span className='txt' onClick={() => setShowResetPassword(true)}>Forget your password?</span>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>



      {/* Reset Password Modal */}
      <Modal show={showResetPassword} onHide={() => setShowResetPassword(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleResetPasswordSubmit}>
            {/* <Form.Group controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                name="newPassword"
                value={resetPasswordFormData.newPassword}
                onChange={handleResetPasswordChange}
                required
              />
            </Form.Group> */}


            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                name="username"
                value={resetPasswordFormData.newPassword}
                onChange={handleResetPasswordChange}
                required
              />
            </Form.Group>




            <Form.Group controlId="formConfirmPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                name="newpassword"
                value={resetPasswordFormData.confirmPassword}
                onChange={handleResetPasswordChange}
                required
              />
            </Form.Group>
            <Button variant="primary my-3" type="submit">
              Reset Password
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;
