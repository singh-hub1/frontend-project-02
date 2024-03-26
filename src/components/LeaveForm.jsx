import React, { useState,useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate,useLocation } from "react-router-dom";
import Navbar1 from './Navbar1';
import UserSidebar from './UserSidebar';
import axios from 'axios';
function LeaveForm() {
    const [name, setName] = useState("");
    const [leaveType, setLeaveType] = useState("");
    const [empCode, setEmpCode] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [daysOfLeave, setDaysOfLeave] = useState("");
    const [reason, setreason] = useState("");
    const location = useLocation();

    const navigate = useNavigate();


    useEffect(() => {
        if (location.state && location.state.user) {
            setName(location.state.user.name); // Autofill name field with user's name
        }
    }, [location.state]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can perform form validation here before submitting

         // Calculate days of leave
         const start = new Date(startDate);
         const end = new Date(endDate);
         const diffTime = Math.abs(end - start);
         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        try {
            // Create a leave request object
            const leaveRequest = {
                name,
                leaveType,
                empCode,
                startDate,
                endDate,
                daysOfLeave: diffDays,
                reason
            };

            // Send the leave request data to the server
            await axios.post('https://backend-project-02-1.onrender.com/leave-applications', leaveRequest);


                 // Reset form fields after successful submission
        setName("");
        setLeaveType("");
        setEmpCode("");
        setStartDate("");
        setEndDate("");
        setDaysOfLeave("");
        setreason("");

            // Redirect to admin dashboard after successful submission
            navigate("/UserDashboard/LeaveForm");
        } catch (error) {
            console.error('Error submitting leave application:', error);
            // Handle error as per your requirement (e.g., display an error message)
        }
    };

    return (
        <>
            <Navbar1 />
            <div style={{ display: 'flex' }}>
                <UserSidebar />


                <div style={{ width: '100%', maxWidth: '600px', margin: '20px auto' }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                // disabled
                            />
                        </Form.Group>

                        <Form.Group controlId="leaveType">
                            <Form.Label>Leave Type:</Form.Label>
                            <Form.Control
                                type="text"
                                value={leaveType}
                                onChange={(e) => setLeaveType(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="empCode">
                            <Form.Label>Emp Code:</Form.Label>
                            <Form.Control
                                type="text"
                                value={empCode}
                                onChange={(e) => setEmpCode(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="startDate">
                            <Form.Label>Start Date:</Form.Label>
                            <Form.Control
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="endDate">
                            <Form.Label>End Date:</Form.Label>
                            <Form.Control
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </Form.Group>

                    

                        <Form.Group controlId="reason">
                            <Form.Label>Reason:</Form.Label>
                            <Form.Control
                                type="text"
                                value={reason}
                                onChange={(e) => setreason(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>







            </div>
        </>
    );
}

export default LeaveForm;
