import { useEffect } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logout = () => {

    useEffect(() => {
        // Clear the user authentication token (or any other related user data).
        // This assumes the token is stored in local storage.
        localStorage.removeItem('authToken');

        // Optionally, you can redirect users immediately after logging out.
        // For instance, to redirect to the home page, use the following:
        // router.push('/');

    }, []);  // The empty dependency array ensures this effect runs once when the component mounts.

    return (
        <div>
            <h1>You've been logged out</h1>
            <p>
                <Link href="/"><a>Return to Home Page</a></Link>
            </p>
        </div>
    );
};

export default Logout;
