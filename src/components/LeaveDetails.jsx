import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Navbar1 from './Navbar1';
import UserSidebar from './UserSidebar';
import axios from 'axios';

function LeaveForm() {
    const [userStatus, setUserStatus] = useState(null);

    useEffect(() => {
        fetchUserStatus();
    }, []);

    const fetchUserStatus = async () => {
        try {
            const response = await axios.get('http://localhost:4000/user/status');
            setUserStatus(response.data.status);
        } catch (error) {
            console.error('Error fetching user status:', error);
        }
    };

    return (
        <>
            <Navbar1 />
            <div className="user-dashboard">
                <UserSidebar />
                <h1>User Leave Details</h1>
                <Card className="mt-3" bg="warning" text="dark">
                    <Card.Body>
                        <Card.Title>{userStatus}</Card.Title>
                        <Card.Text>
                            {/* Add leave details here */}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default LeaveForm;
