import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";
import Navbar1 from './Navbar1';
import UserSidebar from './UserSidebar';
import axios from 'axios';

function LeaveForm() {
    const [leaveType, setLeaveType] = useState("");
    const [empCode, setEmpCode] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [reason, setReason] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        try {
            const leaveRequest = {
                name: user ? user.name : '',
                leaveType,
                empCode,
                startDate,
                endDate,
                daysOfLeave: diffDays,
                reason
            };
            console.log(leaveRequest);
            await axios.post('https://backend-project-02-1.onrender.com/leave-applications', leaveRequest);
            setLeaveType("");
            setEmpCode("");
            setStartDate("");
            setEndDate("");
            setReason("");
            navigate("/UserDashboard/LeaveForm");
        } catch (error) {
            console.error('Error submitting leave application:', error);
        }
    };

    return (
        <>
            <Navbar1 />
            <div style={{ display: 'flex' }}>
                <UserSidebar user={user} />
                <div style={{ width: '100%', maxWidth: '600px', margin: '20px auto' }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={user ? user.name : ''}
                                readOnly
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
                                onChange={(e) => setReason(e.target.value)}
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
