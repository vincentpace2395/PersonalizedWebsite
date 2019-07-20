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
                <Navbar.Brand className='tab' onClick={() => this.props.history.push('/')}>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => this.props.history.push('/documents')}>Documents</Nav.Link>
                        <Nav.Link onClick={() => this.props.history.push('/links')}>Links</Nav.Link>
                        <Nav.Link onClick={() => this.props.history.push('/about-me')}>About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default withRouter(Header);