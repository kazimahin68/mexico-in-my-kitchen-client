import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import logoImage from "../assets/Screenshot 2023-05-03 203047.png";
import ActiveLink from './ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const {error, setError} = useState('');

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
                    <img style={{ width: "72px", height: "30px" }} className='ms-2' src={logoImage} alt="" />
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
                                    <p className='m-0 me-3'>{user.displayName}</p>
                                    <p className='m-0 me-3'>{error}</p>
                                    <Button onClick={handleLogout} variant='secondary' className='fs-6 fw-semibold'>Logout</Button>
                                </div> : <Link to="/login">
                                    <Button variant='secondary' className='fs-6 fw-semibold'>Login</Button>
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