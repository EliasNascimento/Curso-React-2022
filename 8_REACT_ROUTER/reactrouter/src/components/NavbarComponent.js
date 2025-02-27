// 2 - links com React Router

import React from "react";
import "./Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/#home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
