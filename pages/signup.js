import Link from 'next/link';

function Signup() {
    return (
        <div>
            <h1>Sign Up</h1>
            {/* Add your sign-up form here */}
            <p>Already have an account? <Link href="/login">Login</Link></p>
        </div>
    );
}

export default Signup;
