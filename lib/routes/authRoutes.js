const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        // Generate JWT token
        const authToken = jwt.sign({ userId: user._id }, 'SECRET_KEY', { expiresIn: '1h' }); // SECRET_KEY should be in a secure env variable
        res.json({ authToken });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
