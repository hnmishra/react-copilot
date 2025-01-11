const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // await mongoose.connect('mongodb://localhost:27017/clinicalsapi');
        await mongoose.connect('mongodb://mongo/clinicalsapi');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

const closeDB = async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed');
    } catch (error) {
        console.error('Error closing MongoDB connection:', error.message);
    }
};

module.exports = { connectDB, closeDB };