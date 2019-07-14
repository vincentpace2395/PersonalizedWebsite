import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import history from '../history';
import './Header.css';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => this.props.history.push('/resume')}>Resume</Nav.Link>
                        <Nav.Link onClick={() => this.props.history.push('/profiles')}>Profiles</Nav.Link>
                        <Nav.Link onClick={() => this.props.history.push('/contact-me')}>Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default withRouter(Header);