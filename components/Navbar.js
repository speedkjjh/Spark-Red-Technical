// Importing necessary components from react-bootstrap
import { Container, Nav, Navbar } from 'react-bootstrap';

const BasicNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* Brand Logo */}
                <Navbar.Brand href="/">Y</Navbar.Brand>

                {/* Toggle button for smaller screens */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navbar Items */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicNavbar;
