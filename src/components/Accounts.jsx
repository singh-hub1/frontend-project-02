import React, { useState } from 'react'
// import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Row, Col, Form, Image } from "react-bootstrap";
import Header from './Header';
import '../Accounts/Accounts.css';
import HeaderAccounts from './HeaderAccounts';

function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        // event.preventDefault();
        // axios.post('http://localhost:8081/login', values)
        // .then(res => {
        //     if(res.data.Status === 'Success') {
        //         navigate('/');
        //     } else {
        //         setError(res.data.Error);
        //     }
        // })
        // .catch(err => console.log(err));
    }

    return (

        <div className='Accounts-dashboard'>
            < HeaderAccounts />


            <div className="employee-login">
                <img className="logo" src="/Images/logo-blitz.png" alt="Logo" />

               

               <div  className=" admin-container" >
                 <button className='Blitz-admin' type="submit"   onClick={() => navigate("/")} >Accounts Admin</button>
                    
                    <form  className=" blitz-form ">

                        <input type="text" className='form-input' placeholder="Username"  required  />

                        <input type="password"  className='form-input' placeholder="Password" required  />

                        <button type="submit" className='form-submit' >Login</button>

                    </form>

                    <span className='txt' >Forget your password?</span>
                </div>


            </div>

        </div>

    )
}

export default Login