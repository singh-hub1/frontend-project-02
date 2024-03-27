import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Navbar1 from './Navbar1';
import UserSidebar from './UserSidebar';
import axios from 'axios';

function LeaveForm() {
    const [userStatus, setUserStatus] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUserStatus();
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const fetchUserStatus = async () => {
        try {
            const response = await axios.get('https://backend-project-02-1.onrender.com/user/status');
            setUserStatus(response.data.status);
        } catch (error) {
            console.error('Error fetching user status:', error);
        }
    };

    return (
        <>
            <Navbar1 />
            <div className="user-dashboard">
                <UserSidebar user={user} />
                {/* <h1>User Leave Details</h1> */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                            <th>Column 4</th>
                            <th>Column 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Row 1, Column 1</td>
                            <td>Row 1, Column 2</td>
                            <td>Row 1, Column 3</td>
                            <td>Row 1, Column 4</td>
                            <td>Row 1, Column 5</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Row 2, Column 1</td>
                            <td>Row 2, Column 2</td>
                            <td>Row 2, Column 3</td>
                            <td>Row 2, Column 4</td>
                            <td>Row 2, Column 5</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default LeaveForm;
