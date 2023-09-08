import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewTweet() {
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token'); // Get the token from local storage

        if (!token) {
            alert('Please log in to post a tweet');
            return;
        }

        try {
            const response = await axios.post('/api/tweets', { content }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            console.log(response.data);
            setContent(''); // Clear the input field
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formNewTweet">
                <Form.Label>New Tweet</Form.Label>
                <Form.Control type="text" placeholder="What's happening?" value={content} onChange={(e) => setContent(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Tweet
            </Button>
        </Form>
    );
}

export default NewTweet;