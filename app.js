const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./lib/routes/authRoutes');
const tweetRoutes = require('./lib/routes/tweetRoutes');

const app = express();

mongoose.connect('mongodb+srv://speedkjjh:Legitpassword123@jjtechnicaldb.beqquzi.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

// User Authentication Endpoints
app.use('/api/auth', authRoutes);

// Tweet-related Endpoints
app.use('/api/tweets', tweetRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
