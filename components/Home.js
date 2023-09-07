import { useState, useEffect } from 'react';

function Home() {
    const [user, setUser] = useState(null);
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        // Fetch user from local storage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        // Fetch tweets
        (async () => {
            const response = await fetch('/api/tweets');
            const data = await response.json();
            setTweets(data);
        })();
    }, []);

    const handleNewTweet = async (content) => {
        // Call API to create a new tweet
        const response = await fetch('/api/tweets', {
            method: 'POST',
            body: JSON.stringify({ content, userId: user._id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const newTweet = await response.json();

        setTweets([newTweet, ...tweets]);
    };

    // Simplified handlers for reply and delete can be added similarly

    return (
        <div>
            <h2>Welcome, {user ? user.username : 'Guest'}!</h2>
            {user && (
                <div>
                    <input type="text" placeholder="What's happening?" onBlur={(e) => handleNewTweet(e.target.value)} />
                </div>
            )}
            <ul>
                {tweets.map(tweet => (
                    <li key={tweet._id}>
                        <p>{tweet.content}</p>
                        {/* Add buttons for reply and delete here */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
