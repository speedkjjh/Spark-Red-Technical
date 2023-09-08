import { useEffect } from 'react';
import Link from 'next/link';
import { Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LogoutPage = () => {

    useEffect(() => {
        // Clear the user authentication token (or any other related user data).
        // This assumes the token is stored in local storage.
        localStorage.removeItem('authToken');

        // Optionally, you can redirect users immediately after logging out.
        // For instance, to redirect to the home page, use the following:
        // router.push('/');

    }, []);  // The empty dependency array ensures this effect runs once when the component mounts.

    return (
        <Container>
            <Alert variant="info">
                <Alert.Heading>You've been logged out</Alert.Heading>
                <p>
                    <Link href="/"><a>Return to Home Page</a></Link>
                </p>
            </Alert>
        </Container>
    );
};

export default LogoutPage;