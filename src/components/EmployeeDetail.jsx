import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Row, Col, Form, Image } from "react-bootstrap";
import Header from './Header';
import '../Hrms/newusersignup.css'
import homelogo from "../Images/Picture4.png";
function EmployeeDetail() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        dateOfJoining: '',
        designation: '',
        department: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://backend-project-02-1.onrender.com/newuserdata', formData);
            console.log('Employee details saved successfully');
    
      
    
            // Show alert message
            showAlert();
            setFormData({
                username: '',
                password: '',
                confirmPassword: '',
                name: '',
                dateOfJoining: '',
                designation: '',
                department: ''
            });
            // Optionally, you can redirect the user to another page after successful submission
            // navigate('/success');
        } catch (error) {
            console.error('Error saving employee details:', error);
            // Handle error
        }
    };
    const showAlert = () => {
        window.alert('Form submitted successfully');
    
        // Close the alert after 3 seconds
        setTimeout(() => {
            const alertBox = document.querySelector('.alert');
            if (alertBox) {
                alertBox.style.display = 'none';
            }
            // Redirect to previous page
            window.history.back();
        }, 3000);
    };

    return (
        <div className='employee-dashboard'>
            <Header />
            <div className="employee-login-01">
                {/* <img className="logo" src="/Images/logo-blitz.png" alt="Logo" /> */}
                <Image  className="logo" src={homelogo} alt="Logo" />
                <div className="new-signup" >

                    <form className='form-container' onSubmit={handleSubmit}>

                        <input className='form-input' type="text" placeholder="Username" required name="username" value={formData.username} onChange={handleChange} />

                        <input className='form-input' type="password" placeholder="Password" required name="password" value={formData.password} onChange={handleChange} />

                        <input className='form-input' type="password" placeholder="Confirm Password" required name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

                        <input className='form-input' type="text" placeholder="Name" required name="name" value={formData.name} onChange={handleChange} />

                        <input className='form-input' type="date" placeholder="Date of joining" required name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} />

                        <input className='form-input' type="text" placeholder="Designation" required name="designation" value={formData.designation} onChange={handleChange} />

                        <div>
                            <select className='form-input' required name="department" value={formData.department} onChange={handleChange}>
                                <option value="" disabled>Select Department</option>
                                <option value="Sales">Sales</option>
                                <option value="Production">Production</option>
                                <option value="Support">Support</option>
                                <option value="Accounts">Accounts</option>
                                <option value="IT">IT</option>
                                <option value="Operation">Operation</option>
                            </select>
                        </div>

                        <button className="signup-btn" type="submit">Sign up</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetail
