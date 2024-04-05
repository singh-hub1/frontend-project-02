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
        emp_code: '',
        username: '',
        password: '',
        confirmpassword: '',
        name: '',
        dateofjoining: '',
        designation: '',
        department: ''

    });

    const [submitted, setSubmitted] = useState(false); // State variable for form submission message


    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://backend-project-02-1.onrender.com/newuserdata', formData);
            console.log('Employee details saved successfully');

            setFormData({
                emp_code: '',
                username: '',
                password: '',
                confirmpassword: '',
                name: '',
                dateofjoining: '',
                designation: '',
                department: ''

            });
            setSubmitted(true); 
        } catch (error) {
            console.error('Error saving employee details:', error);
        }
    };



    useEffect(() => {
        // Reset the submitted state after 3 seconds
        if (submitted) {
            const timeout = setTimeout(() => {
                setSubmitted(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [submitted]);

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

                {submitted && (
                                <Alert variant="success" className="mt-3">
                                    Form submitted successfully!
                                </Alert>
                            )}

                    <Form onSubmit={handleSubmit}>
                        <h1 style={{ textAlign: 'center' }}>Add User</h1>
                        <div style={{ padding: '20px' }}>

                   
                            <FormGroup controlId="emp_code">
                                <Form.Label>Employee Code:</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder="Enter employee code"
                                    value={formData.emp_code}
                                    onChange={handleChange}
                                    required
                                    name="emp_code"
                                />
                            </FormGroup>

                            <FormGroup controlId="username">
                                <Form.Label>Username:</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder="Enter username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                    name="username"
                                />
                            </FormGroup>
                            <FormGroup controlId="password">
                                <Form.Label>Password:</Form.Label>
                                <FormControl
                                    type="password"
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    name="password"
                                />
                            </FormGroup>
                            <FormGroup controlId="confirmPassword">
                                <Form.Label>Confirm Password:</Form.Label>
                                <FormControl
                                    type="password"
                                    placeholder="Confirm password"
                                    value={formData.confirmpassword}
                                    onChange={handleChange}
                                    required
                                    name="confirmpassword"
                                />
                            </FormGroup>
                            <FormGroup controlId="name">
                                <Form.Label>Name:</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder="Enter name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    name="name"
                                />
                            </FormGroup>
                            <FormGroup controlId="dateofjoining">
                                <Form.Label>Date of Joining:</Form.Label>
                                <FormControl
                                    type="date"
                                    value={formData.dateofjoining}
                                    onChange={handleChange}
                                    required
                                    name="dateofjoining"
                                />
                            </FormGroup>
                            <FormGroup controlId="designation">
                                <Form.Label>Designation:</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder="Enter designation"
                                    value={formData.designation}
                                    onChange={handleChange}
                                    required
                                    name="designation"
                                />
                            </FormGroup>
                            <FormGroup controlId="department">
                                <Form.Label>Department:</Form.Label>
                                <FormControl
                                    as="select"
                                    value={formData.department}
                                    onChange={handleChange}
                                    required
                                    name="department"
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

                            <Button variant="primary" type="submit" className="btn btn-primary mt-4 mx-4">
                                Submit
                            </Button>
                            

                        </div>
                    </Form>


                </div>
            </div>
        </>
    );
};

export default AddUserForm;
