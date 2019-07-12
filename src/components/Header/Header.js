import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="resume">Resume</Nav.Link>
                        <Nav.Link href="profiles">Profiles</Nav.Link>
                        <Nav.Link href="about">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default Header;