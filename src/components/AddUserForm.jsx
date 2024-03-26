import React, { useState,useEffect } from 'react';
import Navbar1 from './Navbar1';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import '../Hrms/newusersignup.css'

const AddUserForm = () => {


    const navigate = useNavigate()
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


    // const handleChange = (e) => {
    //     const value = e.target.type === 'date' ? e.target.valueAsDate : e.target.value;
    //     setFormData({ ...formData, [e.target.name]: value });
    // };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/newuserdata', formData);
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
          const response = await axios.get('http://localhost:4000/admin/profile');
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

                <div className="new-signup-add" >

                    <form className='form-container' onSubmit={handleSubmit}>

                        <input className='form-input' type="text" placeholder="Username" required name="username" value={formData.username} onChange={handleChange} />

                        <input className='form-input' type="password" placeholder="Password" required name="password" value={formData.password} onChange={handleChange} />

                        <input className='form-input' type="password" placeholder="Confirm Password" required name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

                        <input className='form-input' type="text" placeholder="Name" required name="name" value={formData.name} onChange={handleChange} />

                        <input className='form-input' type="date" placeholder="Date of joining" required name="dateofjoining" value={formData.dateofjoining} onChange={handleChange} />

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


        </>

    );
};

export default AddUserForm;
