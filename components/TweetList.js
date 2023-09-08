import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import SearchBar from "./SearchBar";

const TweetList = () => {
    const [tweets, setTweets] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchTweets();
    }, []);

    const fetchTweets = async () => {
        const response = await getTweets(); // Replace with your function to fetch tweets
        setTweets(response.data);
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredTweets = tweets
        .filter((tweet) => tweet.username.includes(search))
        .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));

    return (
        <div>
            <SearchBar handleSearch={handleSearch} />
            {filteredTweets.map((tweet) => (
                <TweetBox key={tweet.id} tweet={tweet} />
            ))}
        </div>
    );
};

export default TweetList;