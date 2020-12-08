import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        7th Floor Ping Pong
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/home">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/watch">
          Watch
        </Nav.Link>
        <Nav.Link as={NavLink} to="/schedule">
          Schedule
        </Nav.Link>
        <Nav.Link as={NavLink} to="/about">
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
