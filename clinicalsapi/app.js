const express = require('express');
const patientRoutes = require('./Routes/patientRoutes');
const clinicalRoutes = require('./Routes/clinicalRoutes');
const cors = require('cors');
const http = require('http');
const { connectDB, closeDB } = require('./db/database');

const app = express();

app.use(cors());
const createDB = async () => {
    try {
        await connectDB();
        console.log('Database created successfully');
    } catch (error) {
        console.error('Error creating database:', error.message);
    }
};

const closeDatabase = async () => {
    try {
        await closeDB();
        console.log('Database closed successfully');
    } catch (error) {
        console.error('Error closing database:', error.message);
    }
};

createDB();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use('/clinicalsapi/patient', patientRoutes);
app.use('/clinicalsapi/clinical', clinicalRoutes);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const closeServer = () => {
    server.close(() => {
        console.log('Server closed');
    });
};

module.exports = { app, server, closeServer,closeDatabase };