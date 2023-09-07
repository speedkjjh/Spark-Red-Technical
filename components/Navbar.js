import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/login"><a>Log In</a></Link>
            <Link href="/signup"><a>Sign Up</a></Link>
        </nav>
    );
};

export default Navbar;
