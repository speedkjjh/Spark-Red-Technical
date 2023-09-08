import React from "react";

const TweetBox = (props) => {
    const { user, content, createdDate, username } = props.tweet;
    return (
        <div className="item">
            <div className="content">
                <div className="header">{username}</div>
                <div>{createdDate}</div>
                <div>{content}</div>
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "blue", marginTop: "7px" }}
                onClick={() => props.clickHander(id)}
            ></i>
        </div>
    );
};

export default TweetBox;