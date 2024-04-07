import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../assets/images/Pixel_Logo.png";


function TopNavBar() {
    const [navbarExpanded, setNavbarExpanded] = useState(false);

    const closeNavbar = () => {
        if (navbarExpanded) {
            setNavbarExpanded(false);
        }
    };

    return (
        <Navbar
            style={{ background: "#000", position: "fixed", zIndex: "1000", top: "0", width: "100%" }}
            expand="lg"
            expanded={navbarExpanded}
            onToggle={() => setNavbarExpanded(!navbarExpanded)}
        >
            <Container>
                <Navbar.Brand className="text-white pt-1 pb-1" href="/">
                    <img src={logo} width="65px" alt="Logo" />
                    <h5 className='d-md-inline d-none text-white ms-2'>Pixel IT Group</h5>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className="text-white glow" href="/" onClick={closeNavbar}><span className="text-white glow">Home</span></Nav.Link>
                        <Nav.Link className="text-white glow" href="#about" onClick={closeNavbar}><span className="text-white glow">About us</span></Nav.Link>
                        <Nav.Link className="text-white glow" href="#services" onClick={closeNavbar}><span className="text-white glow">Services</span></Nav.Link>
                        <Nav.Link className="text-white glow" href="#our_clients" onClick={closeNavbar}><span className="text-white glow">Our Clients</span></Nav.Link>
                        <Nav.Link className="text-white glow" href="#contact_us" onClick={closeNavbar}><span className="text-white glow">Contact Us</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavBar;
