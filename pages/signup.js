import Link from 'next/link';
import Navbar from '@components/AnonNavbar';
import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setError(null);

        try {
            // Simulate an API call to register the user
            // Note: You'd need an actual API endpoint to handle this in a real application.
            await axios.post('/api/auth/signup', { username, email, password });

            // Inform the user of successful registration or redirect them to the login page.
            // For instance:
            alert('Registration successful! You can now log in.');
            window.location.href = '/login';

        } catch (err) {
            // Handle error responses from the server
            setError(err.response?.data?.message || 'An error occurred during registration');
        }
    };

    return (
        <div>
            <Navbar />
            <h1>Sign Up</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
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
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <p>Already have an account? <Link href="/login">Login</Link></p>
        </div>
    );
};

export default Signup;

