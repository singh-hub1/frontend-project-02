import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";
import Navbar1 from './Navbar1';
import UserSidebar from './UserSidebar';
import axios from 'axios';

function LeaveForm() {
    const [leaveType, setLeaveType] = useState("");

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [reason, setReason] = useState("");
    const [leaveDate, setleavedate] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const [users, setUser] = useState(null);
    const [empCode, setEmpCode] = useState();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        // console.log(storedUser);
        if (storedUser) {
            // console.log(storedUser);
            setUser(JSON.parse(storedUser));
            setEmpCode(JSON.parse(storedUser));
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
                name: users ? users.name : '',
                leaveType,
                empCode: empCode ? empCode.emp_code : '',
                leaveDate,
                startDate,
                endDate,
                daysOfLeave: diffDays,
                reason
            };
            console.log(leaveRequest);
            await axios.post('https://backend-project-02-1.onrender.com/leave-applications', leaveRequest);
            setLeaveType("");
            setleavedate("");
            setStartDate("");
            setEndDate("");
            setReason("");
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
                navigate("/UserDashboard/LeaveDetails");
            }, 3000);

        } catch (error) {
            console.error('Error submitting leave application:', error);
        }
    };

    return (
        <>
            <Navbar1 />
            <div style={{ display: 'flex', backgroundColor: 'rgb(169, 249, 255)' }}>
                <UserSidebar user={users} />
                <div style={{ width: '100%', maxWidth: '600px', margin: '20px auto', border: '1px solid grey' }}>
                    <h3 style={{ marginTop: '10px', marginLeft: '160px' }}>Leave Form Request</h3>
                    <Form onSubmit={handleSubmit} style={{ padding: '20px' }}>

                        <Form.Group controlId="name">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={users ? users.name : ''}
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

                                value={empCode ? empCode.emp_code : ''}
                            // value={empCode}
                            // onChange={(e) => setEmpCode(e.target.value)}
                            // required
                            />
                        </Form.Group>

                        <Form.Group controlId="appliedLeaveDate">
                            <Form.Label>Applied Leave Date:</Form.Label>
                            <Form.Control
                                type="date"
                                value={leaveDate}
                                onChange={(e) => setleavedate(e.target.value)}
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
                        <Button variant="primary" type="submit" style={{ marginTop: '30px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
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
}

export default LeaveForm;
