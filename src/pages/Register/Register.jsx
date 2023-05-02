import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Button, Form } from 'react-bootstrap';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo.value;

        console.log(email, password, name)

        createUser(email, password)
        .then(result =>{
            setSuccess('You are Successfully Registered')
            form.reset()
        })
        .catch(error =>{
            setError(error.message);
            form.reset();
        })
    }

    return (
            <Form onSubmit={handleRegister} className='w-50 mx-auto'>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Type Your Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email"  required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password"  required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Your Photo Link</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Photo Url" required/>
                </Form.Group>
                <p className='text-danger fw-semibold'>{error}</p>
                <Button variant="success" type="submit">Register</Button>

                <div className='d-flex justify-content-around align-items-center mt-5'>
                    <hr className='text-body border border-3 border-dark w-25' />
                    <p className='m-0 fw-semibold'>Or You can Register By</p>
                    <hr className='text-body border border-3 border-dark w-25' />
                </div>
                <div className='d-flex mt-5 justify-content-around align-items-center'>
                    <Button variant="success"> Sign up with Google</Button><span>Or</span>
                    <Button variant='success'>Sign up with Github</Button>
                </div>

                <p className='text-success fw-semibold'>{success}</p>
            </Form>
    );
};

export default Register;