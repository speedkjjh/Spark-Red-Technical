import Link from 'next/link';
import Navbar from '@components/AnonNavbar';
import { useState } from 'react';
import axios from 'axios'; // Import the axios library to make HTTP requests
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setError(null);

        try {
            // Simulate an API call to authenticate the user
            // Note: You'd need to have an actual API endpoint to handle this in a real application.
            const response = await axios.post('/api/auth/login', { email, password });

            // If successful, store the authentication token in local storage
            const token = response.data.token;
            localStorage.setItem('authToken', token);

            // Redirect to the home page or dashboard after successful login
            window.location.href = '/';

        } catch (err) {
            // Handle error responses from the server
            setError(err.response?.data?.message || 'An error occurred during login');
        }
    };

    return (
        <div>
            <Navbar />
            <h1>Log In</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Log In</button>
                </div>
            </form>
            <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
        </div>
    );
};

export default Login;
