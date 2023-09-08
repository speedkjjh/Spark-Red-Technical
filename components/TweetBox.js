import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const TweetBox = (props) => {
    const { user, content, createdDate, username } = props.tweet;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{username}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{createdDate}</Card.Subtitle>
                <Card.Text>{content}</Card.Text>
                <Button variant="danger" onClick={() => props.clickHander(id)}>Delete</Button>
            </Card.Body>
        </Card>
    );
};

export default TweetBox;