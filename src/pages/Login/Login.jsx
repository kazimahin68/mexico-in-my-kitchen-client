import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { loggedIn, handleGoogleLogin, handleGithubLogin } = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    // get input data from login form
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        // Login by using email and password
        loggedIn(email, password)
            .then(result => {
                // const loggedUser = result.user;
                // console.log(loggedUser)
                setSuccess('You are Successfully Registered');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
                form.reset();
            })
    }


    // Logged in by using google account
    const handleGoogleSignIn = () => {
        handleGoogleLogin()
            .then(() => {
                setSuccess('You are Successfully Registered');
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }


    // Logged in by using github account
    const handleGithubSignIn = () => {
        handleGithubLogin()
            .then((result) => {
                console.log(result.user)
                setSuccess('You are Successfully Registered');
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className='p-3 container mx-auto'>
            <div className='bg-warning p-5 rounded mt-5'>
                <h2 className='rounded fs-1 fw-bold text-center mb-5'>Logged In To Your Account</h2>
                <div className='row row-cols-1 row-cols-md-2 g-5'>
                    <div className='col'>
                        <img className='rounded w-100' src="https://img.freepik.com/premium-vector/mexican-cuisine-menu-cover-mexico-food-tacos_8071-1621.jpg?w=900" alt="" />
                    </div>
                    <Form onSubmit={handleRegister} className='col'>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className='fw-semibold fs-5'>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label className='fw-semibold fs-5'>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" required />
                        </Form.Group>
                        <div className='text-center'>
                            <p className='text-danger fw-semibold mt-2'>{error}</p>
                            <Button variant="success" type="submit" className='bg-success bg-opacity-75 w-50 mt-3 fw-semibold'>Login</Button>
                        </div>

                        <div className='d-flex flex-column flex-md-row justify-content-around align-items-center mt-3'>
                            <hr className='text-body border border-3 border-dark w-25' />
                            <p className='m-0 fw-semibold'>Or You can Login By</p>
                            <hr className='text-body border border-3 border-dark w-25' />
                        </div>
                        <div className='d-flex flex-column flex-md-row mt-3 justify-content-around align-items-center'>
                            <Button onClick={handleGoogleSignIn} variant="success" className='bg-success bg-opacity-75 p-2 mt-3 fw-semibold'> <FaGoogle className='me-2 text-warning mb-1'></FaGoogle>Sign in with Google</Button>
                            <p className='m-0 fw-bold mt-3 me-2'>OR</p>
                            <Button onClick={handleGithubSignIn} variant='success' className='bg-success bg-opacity-75 mt-3 p-2 fw-semibold'>
                                <FaGithub className='me-2 mb-1'></FaGithub>Sign in with Github</Button>
                        </div>
                        <p className='text-success fw-semibold'>{success}</p>
                        <p className='text-center'>Are you new to this site? Please <Link to="/register" className='text-decoration-none text-danger fw-semibold'>Register</Link></p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;