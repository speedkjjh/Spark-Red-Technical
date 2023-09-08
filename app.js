const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require('./lib/routes/userRoutes');
const tweetRoutes = require('./lib/routes/tweetRoutes');
const connectDb = require("./lib/mongo");
const dotenv = require("dotenv").config();
const express = require('express');
const app = express();
const tweets = require('./lib/routes/tweetRoutes');  // Assuming you have a 'tweets' router

app.use('/api/tweets', tweets);

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // if you need to handle form submissions
app.use("/api/tweets", tweetRoutes);
app.use("/api/users", authRoutes);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Catch-all route to serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});