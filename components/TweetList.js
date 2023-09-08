import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import SearchBar from "./SearchBar";
import { Stack, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const TweetList = () => {
  const [tweets, setTweets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTweets();
  }, []);
  
  const fetchTweets = async () => {
    const response = await axios.get('/api/tweets');
    setTweets(response.data);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredTweets = tweets
    .filter((tweet) => tweet.username.includes(search))
    .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));

    return (
        <Stack gap={3}>
          <SearchBar handleSearch={handleSearch} />
          <ListGroup variant="flush">
            {filteredTweets.map((tweet) => (
              <ListGroup.Item key={tweet.id}>
                <TweetBox tweet={tweet} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Stack>
      );
    };

export default TweetList;