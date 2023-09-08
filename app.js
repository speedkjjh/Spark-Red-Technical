const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./lib/routes/authRoutes');
const tweetRoutes = require('./lib/routes/tweetRoutes');
import 'bootstrap/dist/css/bootstrap.min.css';

const app = express();

// Use environment variables for sensitive information
const MONGO_URI = process.env.MONGO_URI || 'your_default_mongo_uri_here';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // if you need to handle form submissions

// User Authentication Endpoints
app.use('/api/auth', authRoutes);

// Tweet-related Endpoints
app.use('/api/tweets', tweetRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
