import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return ( 
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">
                7th Floor Ping Pong
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/pingpong/home">
                    Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/pingpong/watch">
                    Watch
                </Nav.Link>
                <Nav.Link as={NavLink} to="/pingpong/schedule">
                    Schedule
                </Nav.Link>
                <Nav.Link as={NavLink} to="/pingpong/about">
                    About
                </Nav.Link>
            </Nav>
        </Navbar>
     );
}
 
export default NavBar;