// Importing necessary components from react-bootstrap
import { Container, Nav, Navbar } from 'react-bootstrap';

const AnonNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Y-witter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav className="me-auto my-2 my-lg-0"
                         style={{ maxHeight: '100px' }}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Signup</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default AnonNavbar;
