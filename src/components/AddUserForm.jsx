import React, { useState, useEffect } from 'react';
import Navbar1 from './Navbar1';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, FormControl, Button,Alert } from 'react-bootstrap';
import '../Hrms/newusersignup.css';

const AddUserForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        dateofjoining: '',
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
            showAlert();
            setFormData({
                username: '',
                password: '',
                confirmPassword: '',
                name: '',
                dateofjoining: '',
                designation: '',
                department: ''
            });
        } catch (error) {
            console.error('Error saving employee details:', error);
        }
    };

    const showAlert = () => {
        window.alert('Form submitted successfully');
    };

    const [adminName, setAdminName] = useState('');

    useEffect(() => {
        fetchAdminName();
    }, []);

    const fetchAdminName = async () => {
        try {
            const response = await axios.get('https://backend-project-02-1.onrender.com/admin/profile');
            setAdminName(response.data.name);
        } catch (error) {
            console.error('Error fetching admin name:', error);
        }
    };

    return (
        <>
            <Navbar1 />
            <div className="admin-dashboard">
                <Sidebar adminName={adminName} />
                <div style={{ width: '100%', maxWidth: '600px', margin: '20px auto' }}>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup controlId="username">
                            <Form.Label>Username:</Form.Label>
                            <FormControl
                                type="text"
                                placeholder="Enter username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password">
                            <Form.Label>Password:</Form.Label>
                            <FormControl
                                type="password"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="confirmPassword">
                            <Form.Label>Confirm Password:</Form.Label>
                            <FormControl
                                type="password"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="name">
                            <Form.Label>Name:</Form.Label>
                            <FormControl
                                type="text"
                                placeholder="Enter name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="dateofjoining">
                            <Form.Label>Date of Joining:</Form.Label>
                            <FormControl
                                type="date"
                                value={formData.dateofjoining}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="designation">
                            <Form.Label>Designation:</Form.Label>
                            <FormControl
                                type="text"
                                placeholder="Enter designation"
                                value={formData.designation}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="department">
                            <Form.Label>Department:</Form.Label>
                            <FormControl
                                as="select"
                                value={formData.department}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select Department</option>
                                <option value="Sales">Sales</option>
                                <option value="Production">Production</option>
                                <option value="Support">Support</option>
                                <option value="Accounts">Accounts</option>
                                <option value="IT">IT</option>
                                <option value="Operation">Operation</option>
                            </FormControl>
                        </FormGroup>
                        <Button variant="primary" type="submit" style={{ marginTop: '30px' }}>
                            Submit
                        </Button>
                    </Form>
                    {/* Alert component to show form submission success */}
                    <Alert variant="success" show={showAlert}>
                        Form submitted successfully!
                    </Alert>
                </div>
            </div>
        </>
    );
};

export default AddUserForm;
