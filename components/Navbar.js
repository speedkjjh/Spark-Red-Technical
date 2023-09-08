// Importing necessary components from react-bootstrap
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const BasicNavbar = () => {
    return (
        <nav>
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

                            {/* Dropdown Menu */}
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
}

export default BasicNavbar;
