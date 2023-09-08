const mongoose = require('mongoose');

const connection = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI);
};

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
