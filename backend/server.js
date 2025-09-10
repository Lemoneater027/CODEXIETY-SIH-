const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security and performance middleware
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api', limiter);

// CORS configuration
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://monastery360.sikkim.gov.in'] 
        : ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// API Routes
app.use('/api/monasteries', require('./routes/monasteries'));
app.use('/api/events', require('./routes/events'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/uploads', require('./routes/uploads'));

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        service: 'Monastery360 API'
    });
});

// API documentation endpoint
app.get('/api/docs', (req, res) => {
    res.json({
        name: 'Monastery360 API',
        version: '1.0.0',
        description: 'Digital Heritage Platform for Sikkim Monasteries',
        endpoints: {
            monasteries: {
                'GET /api/monasteries': 'Get all monasteries',
                'GET /api/monasteries/:id': 'Get monastery by ID',
                'GET /api/monasteries/district/:district': 'Get monasteries by district',
                'GET /api/monasteries/search?q=query': 'Search monasteries'
            },
            events: {
                'GET /api/events': 'Get all events',
                'GET /api/events/upcoming': 'Get upcoming events',
                'POST /api/events/:id/book': 'Book event'
            },
            uploads: {
                'POST /api/uploads/images': 'Upload monastery images',
                'POST /api/uploads/360': 'Upload 360° images',
                'POST /api/uploads/audio': 'Upload audio guides'
            }
        }
    });
});

// Serve frontend for SPA routes
app.get('*', (req, res) => {
    // Don't serve index.html for API routes
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ error: 'API endpoint not found' });
    }
    
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    
    if (err.type === 'entity.parse.failed') {
        return res.status(400).json({ error: 'Invalid JSON' });
    }
    
    if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File too large' });
    }
    
    res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
    🏔️  Monastery360 Server Started
    📍 Port: ${PORT}
    🌐 Frontend: http://localhost:${PORT}
    🔌 API: http://localhost:${PORT}/api
    📊 Health: http://localhost:${PORT}/api/health
    📚 Docs: http://localhost:${PORT}/api/docs
    🎯 Environment: ${process.env.NODE_ENV || 'development'}
    `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    server.close(() => {
        console.log('Process terminated');
    });
});