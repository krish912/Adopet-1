import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Ensure the path is correct
import accountLogo from '../assets/images/acclogo.png'; // Replace with your logo image
 // Import the new CSS file

function Header() {
    const { isLoggedIn, signOut } = useAuth();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    // const handleLogoClick = () => {
    //     navigate('/offcanva'); // Redirect to petform.js page
    // };

    const handleSignOut = () => {
        signOut();
        navigate('/');
    };

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary fixed-top" style={{ display: "flex" }}>
                <Container>
                    <h1 >ADOPET</h1>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className="underline-hover">Home</Nav.Link>
                            <Nav.Link as={Link} to="/Dogs" className="underline-hover">Pets</Nav.Link>
                            <Nav.Link as={Link} to="/petShops" className="underline-hover">PetShop</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="underline-hover">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="underline-hover">Contact</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            {!isLoggedIn ? (
                                <>
                                    <Nav.Link as={Link} to="/login" className="underline-hover">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/help" className="underline-hover">Help</Nav.Link>
                                </>
                            ) : (
                                <img src={accountLogo} alt="Account Logo" className="account-logo" style={{ width: '40px', height: '40px', borderRadius: '50%' }}  onClick={handleShow} />
                            )}
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} placement='top' scroll='true'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        Hi,
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className="underline-hover" onClick={()=>navigate('/upload-pet-details')}>Add Pets</p><br/>
                    <p className="underline-hover">Personal Information</p><br/>
                    <p className="underline-hover">Orders</p><br/>
                    <p className="underline-hover">Saved Items</p><br/>
                    <p className="underline-hover">Purchases</p><br/><r/><br/>
                    <p className="underline-hover" style={{ color: '#808080' }} onClick={handleSignOut}>Sign out</p>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Header;
