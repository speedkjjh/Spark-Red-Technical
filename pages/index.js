import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnonNavbar from '@components/AnonNavbar';
import UserNavbar from '@components/UserNavbar';
import TweetBox from '../components/TweetBox';
import axios from 'axios';  // Assuming you're using axios, otherwise use fetch.

const Homepage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        // Check if a user authentication token exists in the local storage
        const token = localStorage.getItem('authToken');
        setIsLoggedIn(!!token);
    }, []);

    useEffect(() => {
        // Fetch the most recent 10 tweets
        const fetchTweets = async () => {
            try {
                const response = await axios.get('/api/tweets?limit=10'); // Replace with your API endpoint.
                setTweets(response.data);
            } catch (error) {
                console.error("Failed to fetch tweets:", error.message);
            }
        };

        fetchTweets();
    }, []);

    // Filter tweets based on the search term
    const filteredTweets = searchTerm
        ? tweets.filter(tweet => tweet.user.includes(searchTerm))
        : tweets;

    return (
        <div>
            {isLoggedIn ? <UserNavbar /> : <AnonNavbar /> }

            <h1>Welcome to Y, a Twitter-like Web Application Project!</h1>
            <h1>Created by Johnny Jeong</h1>
            {isLoggedIn ? <p>You are logged in!</p> : <p>Please log in to interact.</p>}

            <div>
                <input
                    type="text"
                    placeholder="Search by username..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>

            {filteredTweets.map(tweet => (
                <TweetBox key={tweet.id} tweet={tweet} />
            ))}
        </div>
    );
};

export default Homepage;
