const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Load monastery data for demo mode
const { MonasteryData } = require('../js/monastery-data.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Basic middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from parent directory
app.use(express.static(path.join(__dirname, '../')));

// Connect to MongoDB (optional - only if MONGODB_URI exists)
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('✅ MongoDB Connected'))
        .catch(err => console.error('❌ MongoDB Error:', err));
} else {
    console.log('⚠️ No MONGODB_URI - running in demo mode with sample data');
}

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        message: 'CODEXIETY SIH 2025 Backend Working! (Demo Mode)',
        timestamp: new Date().toISOString()
    });
});

// Test route to check paths
app.get('/api/test', (req, res) => {
    const frontendPath = path.join(__dirname, '../');
    const indexPath = path.join(__dirname, '../index.html');
    const fs = require('fs');
    
    res.json({
        message: 'Path test',
        frontendPath: frontendPath,
        indexPath: indexPath,
        indexExists: fs.existsSync(indexPath),
        filesInRoot: fs.existsSync(frontendPath) ? fs.readdirSync(frontendPath) : []
    });
});

// API routes using your monastery data
app.get('/api/monasteries', (req, res) => {
    res.json({
        success: true,
        message: 'Demo mode - using sample monastery data',
        data: MonasteryData.monasteries
    });
});

app.get('/api/monasteries/:id', (req, res) => {
    const monastery = MonasteryData.monasteries.find(m => m.id === req.params.id);
    if (!monastery) {
        return res.status(404).json({ 
            success: false, 
            error: 'Monastery not found' 
        });
    }
    res.json({
        success: true,
        data: monastery
    });
});

app.get('/api/events', (req, res) => {
    res.json({
        success: true,
        message: 'Demo mode - using sample events',
        data: MonasteryData.events || []
    });
});

app.post('/api/auth/login', (req, res) => {
    res.json({
        success: true,
        message: 'Auth API working! (Demo Mode)',
        data: { message: 'Login endpoint ready' }
    });
});

// Handle API 404s
app.use('/api', (req, res) => {
    res.status(404).json({ 
        success: false,
        error: 'API endpoint not found',
        path: req.path
    });
});

// Serve index.html for the root route only
app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, '../index.html');
    console.log('Trying to serve:', indexPath);
    
    if (require('fs').existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>CODEXIETY SIH 2025 - Demo Mode</title>
                <!-- Your existing HTML template stays the same -->
            </head>
            <body>
                <div class="container">
                    <h1>🏔️ CODEXIETY SIH 2025</h1>
                    <h2 class="success">✅ Backend Running Successfully! (Demo Mode)</h2>
                    <p>Using sample monastery data - no database required!</p>
                    <!-- Rest of your HTML stays the same -->
                </div>
            </body>
            </html>
        `);
    }
});

// Start server  
app.listen(PORT, () => {
    console.log(`
    🏔️ CODEXIETY SIH 2025 Backend Running!
    📍 Port: ${PORT}
    🌐 Frontend: http://localhost:${PORT}
    🔌 Health API: http://localhost:${PORT}/api/health
    🏛️ Monasteries API: http://localhost:${PORT}/api/monasteries
    
    ⚠️ DEMO MODE: Using sample data, no database needed!
    ✅ Ready for SIH presentation!
    `);
});
