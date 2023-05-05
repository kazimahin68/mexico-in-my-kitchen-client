import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    // Get input value from the input field of form.
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo.value;

        if (password.length < 6) {
            setError('Your Password must have at least 6 characters');
            return
        }
    // Create new user by firebase authentication.
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

    // Update user name and photo
    const updateUserProfile = (user, name, photoUrl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className='container mx-auto bg-warning p-5 rounded mt-5'>
            <div className='row row-cols-1 row-cols-md-2 g-5'>
                <div className='col'>
                    <img className='rounded w-100' src="https://img.freepik.com/premium-photo/three-tacos-wooden-board-with-bowl-salsa-bowl-salsa_254939-862.jpg?w=740" alt="" />
                </div>
                <Form onSubmit={handleRegister} className='col'>
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
                    <p className='text-success fw-semibold'>{success}</p>
                    <p className='text-center'>Already have an account? Please <Link to="/login" className='text-decoration-none text-danger fw-semibold'>Login</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Register;