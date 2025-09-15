const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Basic middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from parent directory
app.use(express.static(path.join(__dirname, '../')));

// Connect to MongoDB (optional)
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('✅ MongoDB Connected'))
        .catch(err => console.error('❌ MongoDB Error:', err));
}

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        message: 'CODEXIETY SIH 2025 Backend Working!',
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

// Sample API routes (simple versions to avoid require errors)
app.get('/api/monasteries', (req, res) => {
    res.json({
        success: true,
        message: 'Monasteries API working!',
        data: [
            {
                id: 1,
                name: { english: "Sample Monastery" },
                location: { district: "East Sikkim" },
                featured: true
            }
        ]
    });
});

app.get('/api/events', (req, res) => {
    res.json({
        success: true,
        message: 'Events API working!',
        data: []
    });
});

app.post('/api/auth/login', (req, res) => {
    res.json({
        success: true,
        message: 'Auth API working!',
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
                <title>CODEXIETY SIH 2025</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
                    .container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                    .success { color: #4CAF50; }
                    .info { background: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0; }
                    button { background: #2196F3; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin: 10px 5px; }
                    button:hover { background: #1976D2; }
                    pre { background: #f5f5f5; padding: 10px; border-radius: 5px; overflow: auto; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🏔️ CODEXIETY SIH 2025</h1>
                    <h2 class="success">✅ Backend Running Successfully!</h2>
                    
                    <div class="info">
                        <strong>📌 Status:</strong> Your backend server is working perfectly!<br>
                        <strong>🎯 Project:</strong> Monastery360 - Digital Heritage Platform<br>
                        <strong>⏰ Time:</strong> ${new Date().toLocaleString()}
                    </div>
                    
                    <h3>🧪 API Tests</h3>
                    <button onclick="testHealth()">Test Health API</button>
                    <button onclick="testMonasteries()">Test Monasteries API</button>
                    <button onclick="testPaths()">Check File Paths</button>
                    
                    <div id="result"></div>
                    
                    <h3>📁 Next Steps</h3>
                    <ol>
                        <li>Create your <code>index.html</code> file in the project root</li>
                        <li>Add your existing CSS and JS files</li>
                        <li>Your frontend will be served automatically!</li>
                    </ol>
                </div>
                
                <script>
                    async function testAPI(endpoint, buttonText) {
                        try {
                            document.getElementById('result').innerHTML = '<p>🔄 Testing ' + buttonText + '...</p>';
                            const response = await fetch(endpoint);
                            const data = await response.json();
                            document.getElementById('result').innerHTML = 
                                '<h4>✅ ' + buttonText + ' Result:</h4><pre>' + JSON.stringify(data, null, 2) + '</pre>';
                        } catch (error) {
                            document.getElementById('result').innerHTML = 
                                '<h4>❌ Error:</h4><p>' + error.message + '</p>';
                        }
                    }
                    
                    function testHealth() { testAPI('/api/health', 'Health API'); }
                    function testMonasteries() { testAPI('/api/monasteries', 'Monasteries API'); }
                    function testPaths() { testAPI('/api/test', 'File Paths'); }
                </script>
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
    
    ✅ Ready! No wildcards used - server should start without errors.
    `);
});
