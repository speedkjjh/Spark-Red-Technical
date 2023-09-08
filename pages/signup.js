import Link from 'next/link';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@components/AnonNavbar';
import SignUp from '../components/SignUp';

const SignupPage = () => {
    return (
        <Container>
            <Navbar />
            <h1>Sign Up</h1>
            <SignUp />
            <p>Already have an account? <Link href="/login">Log In</Link></p>
        </Container>
    );
};

export default SignupPage;