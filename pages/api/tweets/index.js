import connectDb from '../../../lib/mongo';
import Tweet from '../../../lib/models/Tweet';

export default async function handler(req, res) {
    await connectDb();

    if (req.method === 'POST') {
        const tweet = new Tweet({
            content: req.body.content,
            user: req.body.userId
        });

        const savedTweet = await tweet.save();
        res.status(200).json(savedTweet);
    } else if (req.method === 'GET') {
        const tweets = await Tweet.find().populate('user').populate('replies');
        res.status(200).json(tweets);
    } else {
        res.status(400).send('Invalid method');
    }
}
