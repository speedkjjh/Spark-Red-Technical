const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./lib/routes/userRoutes');
const tweetRoutes = require('./lib/routes/tweetRoutes');
import 'bootstrap/dist/css/bootstrap.min.css';
const connectDb = require("./lib/mongo");
const errorHandler = require("./lib/middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // if you need to handle form submissions
app.use("/api/tweets", tweetRoutes);
app.use("/api/users", authRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
