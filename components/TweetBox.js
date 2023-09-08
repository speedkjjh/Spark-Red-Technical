function TweetBox({ tweet }) {
    return (
        <div style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
            <strong>{tweet.user}</strong>
            <p>{tweet.content}</p>
            <p><em>{new Date(tweet.createdDate).toLocaleString()}</em></p>

            {tweet.replies && tweet.replies.length > 0 && (
                <div>
                    {tweet.replies.map((reply, idx) => (
                        <div key={idx} style={{ border: '1px solid #ccc', margin: '10px', padding: '5px' }}>
                            <strong>{reply.user}</strong>
                            <p>{reply.content}</p>
                            <p><em>{new Date(reply.createdDate).toLocaleString()}</em></p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TweetBox;
