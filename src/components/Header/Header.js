import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from '../About/About';
import Profiles from '../Profiles/Profiles';
import Resume from '../Resume/Resume'
import history from '../history';
import './Header.css';
import { withRouter, Link } from 'react-router-dom';

class Header extends React.Component {
    state = {
        render: ''
    };

     onResumeTabClicked = () => {
        return (
            this.props.history.push('/resume')
        );
    };

    onProfilesTabClicked = () => {
        return (
            this.props.history.push('/profiles')
        );
    };

    onAboutTabClicked = () => {
        return (
            this.props.history.push('/about')
        );
    };

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={this.onResumeTabClicked}>Resume</Nav.Link>
                        <Nav.Link onClick={this.onProfilesTabClicked}>Profiles</Nav.Link>
                        <Nav.Link onClick={this.onAboutTabClicked}>About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default withRouter(Header);