const express = require('express');
const router = express.Router();

// Sample monastery data - Replace with your actual database queries
const sampleMonasteries = [
    {
        id: 'rumtek_monastery',
        name: {
            english: 'Rumtek Monastery',
            nepali: 'रुम्तेक गुम्बा',
            hindi: 'रुम्तेक मठ'
        },
        location: {
            latitude: 27.3389,
            longitude: 88.5583,
            district: 'East Sikkim'
        },
        description: {
            english: 'The largest monastery in Sikkim'
        },
        images: {
            main: '/images/monasteries/rumtek/main.jpg'
        },
        featured: true
    }
];

// GET /api/monasteries - Get all monasteries
router.get('/', (req, res) => {
    try {
        const { district, featured, limit } = req.query;
        let monasteries = [...sampleMonasteries];
        
        // Filter by district
        if (district) {
            monasteries = monasteries.filter(m => 
                m.location.district.toLowerCase() === district.toLowerCase()
            );
        }
        
        // Filter featured
        if (featured === 'true') {
            monasteries = monasteries.filter(m => m.featured);
        }
        
        // Limit results
        if (limit) {
            monasteries = monasteries.slice(0, parseInt(limit));
        }
        
        res.json({
            success: true,
            count: monasteries.length,
            data: monasteries
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET /api/monasteries/:id - Get monastery by ID
router.get('/:id', (req, res) => {
    try {
        const monastery = sampleMonasteries.find(m => m.id === req.params.id);
        
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
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET /api/monasteries/search?q=query - Search monasteries
router.get('/search', (req, res) => {
    try {
        const { q, language = 'english' } = req.query;
        
        if (!q) {
            return res.status(400).json({
                success: false,
                error: 'Search query required'
            });
        }
        
        const results = sampleMonasteries.filter(monastery => 
            monastery.name[language]?.toLowerCase().includes(q.toLowerCase()) ||
            monastery.description[language]?.toLowerCase().includes(q.toLowerCase())
        );
        
        res.json({
            success: true,
            query: q,
            count: results.length,
            data: results
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET /api/monasteries/district/:district - Get monasteries by district
router.get('/district/:district', (req, res) => {
    try {
        const district = req.params.district;
        const monasteries = sampleMonasteries.filter(m => 
            m.location.district.toLowerCase() === district.toLowerCase()
        );
        
        res.json({
            success: true,
            district: district,
            count: monasteries.length,
            data: monasteries
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET /api/monasteries/:id/360-images - Get 360° images for monastery
router.get('/:id/360-images', (req, res) => {
    try {
        const monastery = sampleMonasteries.find(m => m.id === req.params.id);
        
        if (!monastery) {
            return res.status(404).json({
                success: false,
                error: 'Monastery not found'
            });
        }
        
        // Return 360° tour data
        const tourData = {
            monastery_id: monastery.id,
            scenes: [
                {
                    id: 'entrance',
                    name: 'Monastery Entrance',
                    image: `/images/360-tours/${monastery.id}/entrance.jpg`,
                    hotspots: [
                        { type: 'info', yaw: 0, pitch: 0, text: 'Main entrance' },
                        { type: 'navigate', yaw: 1.57, pitch: 0, target: 'main_hall' }
                    ]
                }
                // Add more scenes
            ]
        };
        
        res.json({
            success: true,
            data: tourData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;