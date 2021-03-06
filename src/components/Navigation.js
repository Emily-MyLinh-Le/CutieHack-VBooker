import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';

function Navigation() {
    return(
       <>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">VBooker </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Voting">Voting</Nav.Link>
           
            <NavDropdown title="Week" id="basic-nav-dropdown">
              <NavDropdown.Item href="/week/1-11-20">1st Week November</NavDropdown.Item>
              <NavDropdown.Item href="/week/2-11-20">2st Week November</NavDropdown.Item>
              <NavDropdown.Item href="/week/3-11-20">3st Week November</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="/Booking">My booking</Nav.Link>
          </Nav>
          <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      </>
    );
  
    }  

export default Navigation;
