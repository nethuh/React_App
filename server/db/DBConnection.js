const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

const db = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URL);
        console.info(`Mongo DB connected to: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB Connect error", error);
    }
}

module.exports = db;
