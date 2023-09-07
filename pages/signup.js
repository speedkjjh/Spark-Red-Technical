import Link from 'next/link';
import Navbar from '../components/Navbar';

const Signup = () =>{
    return (
        <div>
            <Navbar />
            <h1>Sign Up</h1>
            {/* Add your sign-up form here */}
            <p>Already have an account? <Link href="/login">Login</Link></p>
        </div>
    );
}

export default Signup;
