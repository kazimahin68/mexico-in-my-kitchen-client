import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Button, Form } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser, handleGoogleSingUp, handleGithubSignUp } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo.value;
        
        if(password.length < 6){
            setError('Your Password must have at least 6 characters');
            return
        }

        createUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                // console.log(registeredUser)
                setSuccess('You are Successfully Registered');
                updateUserProfile(registeredUser, name, photoUrl);
                form.reset();
                navigate('/')
            })
            .catch(error => {
                setError(error.message);
                form.reset();
            })
    }

    const updateUserProfile = (user, name, photoUrl) =>{
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
        .then(() =>{
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    const handleGoogleResister = () =>{
        handleGoogleSingUp()
        .then(() =>{
            setSuccess('You are Successfully Registered');
            navigate('/')
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    const handleGithubRegister = () =>{
        handleGithubSignUp()
        .then(() =>{
            setSuccess('You are Successfully Registered');
            navigate('/')
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    return (
        <Form onSubmit={handleRegister} className='w-50 mx-auto bg-warning p-5 bg-opacity-50 rounded mt-5'>
            <Form.Group className="mb-3">
                <Form.Label className='fw-semibold fs-5'>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Type Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className='fw-semibold fs-5'>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className='fw-semibold fs-5'>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label className='fw-semibold fs-5'>Your Photo Link</Form.Label>
                <Form.Control name='photo' type="text" placeholder="Photo Url" required />
            </Form.Group>
            <div className='text-center'>
                <p className='text-danger fw-semibold mt-2'>{error}</p>
                <Button variant="success" type="submit" className='bg-success bg-opacity-75 w-50 mt-3 fw-semibold'>Register</Button>
            </div>

            <div className='d-flex justify-content-around align-items-center mt-3'>
                <hr className='text-body border border-3 border-dark w-25' />
                <p className='m-0 fw-semibold'>Or You can Register By</p>
                <hr className='text-body border border-3 border-dark w-25' />
            </div>
            <div className='d-flex mt-3 justify-content-around align-items-center'>
                <Button onClick={handleGoogleResister} variant="success" className='bg-success bg-opacity-75 p-2 mt-3 fw-semibold'> <FaGoogle className='me-2 text-warning mb-1'></FaGoogle>Sign up with Google</Button>
                <p className='m-0 fw-bold mt-3'>OR</p>
                <Button onClick={handleGithubRegister} variant='success' className='bg-success bg-opacity-75 mt-3 p-2'>
                   <FaGithub className='me-2 mb-1'></FaGithub> Sign up with Github</Button>
            </div>

            <p className='text-success fw-semibold'>{success}</p>
        </Form>
    );
};

export default Register;