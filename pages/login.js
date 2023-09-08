import Link from 'next/link';
import { Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@components/AnonNavbar';
import Login from '../components/Login';

const LoginPage = () => {
    return (
        <Container>
            <Navbar />
            <h1>Log In</h1>
            <Login />
            <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
        </Container>
    );
};

export default LoginPage;