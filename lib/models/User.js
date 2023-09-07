import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    createdDate: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('User', UserSchema);
