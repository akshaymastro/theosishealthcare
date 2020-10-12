import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, FormControl, Button } from "react-bootstrap";

function TopNav() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <img src="/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              About Us
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Third Party Manufacturing
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Product List
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopNav;
