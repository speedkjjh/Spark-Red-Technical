import connectDb from '../../../lib/mongo';
import Tweet from '../../../lib/models/Tweet';
import Reply from '../../../lib/models/Reply';

export default async function handler(req, res) {
    await connectDb();

    const tweetId = req.query.id;

    if (req.method === 'POST') {
        const reply = new Reply({
            content: req.body.content,
            user: req.body.userId,
            tweet: tweetId
        });

        const savedReply = await reply.save();

        // Update the tweet to add the reply
        await Tweet.findByIdAndUpdate(tweetId, {
            $push: { replies: savedReply._id }
        });

        res.status(200).json(savedReply);
    } else {
        res.status(400).send('Invalid method');
    }
}
