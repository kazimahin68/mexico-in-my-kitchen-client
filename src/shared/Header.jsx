import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import ActiveLink from './ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const {error, setError} = useState('');

    // console.log(user)

    const handleLogout =() =>{
        logOut()
        .then(result =>{})
        .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="light" className='p-3'>
                <Container>
                    <h2 className='fw-bold'>Mexican <span className='text-warning'>Kitchen</span></h2>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mx-auto">
                            <ActiveLink to="/">Home</ActiveLink>
                            <ActiveLink to="/blogs">Blogs</ActiveLink>
                            <ActiveLink to="/about">About</ActiveLink>
                        </Nav>
                        <Nav>
                            <div className='ms-3'>
                                {user ? <div className='d-flex justify-content-center align-items-center'>
                                    <img className='rounded-circle me-3 w-25' src={user?.photoURL} alt="" />
                                    <p className='m-0 me-3'>{error}</p>
                                    <Button onClick={handleLogout} variant='warning' className='fs-6 fw-bold p-2 px-5'>Logout</Button>
                                </div> : <Link to="/login">
                                    <Button variant='warning' className='fs-6 fw-bold p-2 px-5'>Login</Button>
                                </Link>}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;