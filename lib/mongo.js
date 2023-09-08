import mongoose from 'mongoose';

const connection = {};

async function connectDb() {
    if (connection.isConnected) {
        return;
    }
    // Write code to connect to the database
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
