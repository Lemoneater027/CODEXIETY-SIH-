const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow frontend to connect to backend
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse form data

// Serve static files from frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// API Routes
app.use('/api/monasteries', require('./routes/monasteries'));
app.use('/api/upload', require('./routes/upload'));

// Serve frontend for all non-API routes
app.get('*', (req, res) => {
    // Don't serve index.html for API routes
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ error: 'API endpoint not found' });
    }
    
    // Serve index.html for all other routes
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: err.message 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
    🏔️  Monastery360 Server Running!
    📍 Port: ${PORT}
    🌐 Frontend: http://localhost:${PORT}
    🔌 API: http://localhost:${PORT}/api
    `);
});