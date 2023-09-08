import { useState, useEffect } from 'react';
import { Container, Navbar, Form, FormControl, Button, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnonNavbar from '@components/AnonNavbar';
import UserNavbar from '@components/UserNavbar';
import Home from '../components/Home';
import axios from 'axios';  // Assuming you're using axios, otherwise use fetch.

const Homepage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Check if a user authentication token exists in the local storage
        const token = localStorage.getItem('authToken');
        setIsLoggedIn(!!token);
    }, []);

    return (
        <Container>
            {isLoggedIn ? <UserNavbar /> : <AnonNavbar /> }

            <Navbar bg="light" variant="light">
                <Navbar.Brand>Welcome to Y, a Twitter-like Web Application Project!</Navbar.Brand>
                <Navbar.Text>Created by Johnny Jeong</Navbar.Text>
                {isLoggedIn ? <Navbar.Text>You are logged in!</Navbar.Text> : <Navbar.Text>Please log in to interact.</Navbar.Text>}
            </Navbar>

            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search by username..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
            </Form>

            <Home searchTerm={searchTerm} />
        </Container>
    );
};

export default Homepage;