import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import jwtDecode from 'jwt-decode';

const UserNavbar = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Get token from local storage
        const token = localStorage.getItem('userToken');

        if (token) {
            // Decode the token
            const decodedToken = jwtDecode(token);

            // Assuming your token payload has a 'username' field
            setUsername(decodedToken.username || 'User');
        }
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">Y</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="/profile">{username}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default UserNavbar;