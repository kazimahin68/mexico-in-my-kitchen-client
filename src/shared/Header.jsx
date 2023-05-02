import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-4 rounded'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className=''>
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none text-black me-4' to="/">Home</Link>
                            <Link className='text-decoration-none text-black me-4' to="/">About</Link>
                            <Link className='text-decoration-none text-black' to="/">Career</Link>
                        </Nav>
                        <Nav className='d-flex justify-content-center align-items-center'>
                            <FaUserCircle style={{ width: "40px", height: "40px" }}></FaUserCircle>
                            <div className='ms-3'>
                                {user ? <Button variant='secondary' className='fs-6 fw-semibold'>Logout</Button> : <Link to="/login">
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