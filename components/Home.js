import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TweetList from './TweetList';
import SearchBar from './SearchBar';
import { parseCookies } from 'nookies';

function Home() {
    const [user, setUser] = useState(null);
    const [tweets, setTweets] = useState([]);
    const [search, setSearch] = useState('');
    const [newTweet, setNewTweet] = useState('');

    useEffect(() => {
        // Fetch user from local storage
        const { authToken } = parseCookies();
        if (authToken) {
            setUser(JSON.parse(authToken));
        }

        fetchTweets();
    }, []);

    const fetchTweets = async () => {
        const response = await axios.get('/api/tweets'); // Replace with your function to fetch tweets
        setTweets(response.data);
    };

    const handleSearch = (value) => {
        setSearch(value);
    };

    const handleNewTweet = async (event) => {
        event.preventDefault();
        const response = await axios.post('/api/tweets', { content: newTweet, userId: user._id }); // Replace with your function to create a new tweet
        setNewTweet('');
        fetchTweets();
    };

    const filteredTweets = tweets
        .filter((tweet) => tweet.username.includes(search))
        .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));

    return (
        <Container>
            <h2>Welcome, {user ? user.username : 'Guest'}!</h2>
            {user && (
                <Form onSubmit={handleNewTweet}>
                    <Form.Control type="text" placeholder="What's happening?" value={newTweet} onChange={(e) => setNewTweet(e.target.value)} />
                    <Button variant="primary" type="submit">Tweet</Button>
                </Form>
            )}
            <SearchBar handleSearch={handleSearch} />
            <TweetList tweets={filteredTweets} />
        </Container>
    );
}

export default Home;