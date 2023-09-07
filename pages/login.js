import Link from 'next/link';
import Navbar from '../components/Navbar';

const Login = () => {
    return (
        <div>
            <Navbar />
            <h1>Login</h1>
            {/* Add your login form here */}
            <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
        </div>
    );
}

export default Login;
