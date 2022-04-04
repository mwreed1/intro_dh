import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';

function Menu() {
    return (
        <Navbar bg="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#" className="white me-4">Music Trends</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-4 me-auto justify-content-evenly">
                    <Nav.Link href="#" className="white me-2">Data Visualizations</Nav.Link>
                    <Nav.Link href="#articles" className="white">Articles</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;