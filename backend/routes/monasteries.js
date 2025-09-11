const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Read monastery data from frontend file
function getMonasteryData() {
    try {
        const dataPath = path.join(__dirname, '../../frontend/js/monastery-data.js');
        const fileContent = fs.readFileSync(dataPath, 'utf8');
        
        // Extract the MonasteryData object from the file
        // This is a simple way to read the data
        const match = fileContent.match(/const MonasteryData = ({[\s\S]*?});/);
        if (match) {
            const dataString = match[1];
            // Use eval carefully (only for development)
            const data = eval('(' + dataString + ')');
            return data;
        }
        return { monasteries: [] };
    } catch (error) {
        console.error('Error reading monastery data:', error);
        return { monasteries: [] };
    }
}

// GET /api/monasteries - Get all monasteries
router.get('/', (req, res) => {
    try {
        const data = getMonasteryData();
        const { district, featured, limit } = req.query;
        
        let monasteries = data.monasteries || [];
        
        // Filter by district
        if (district && district !== 'all') {
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

// GET /api/monasteries/:id - Get specific monastery
router.get('/:id', (req, res) => {
    try {
        const data = getMonasteryData();
        const monastery = data.monasteries.find(m => m.id === req.params.id);
        
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

// GET /api/monasteries/search/:query - Search monasteries
router.get('/search/:query', (req, res) => {
    try {
        const data = getMonasteryData();
        const query = req.params.query.toLowerCase();
        
        const results = data.monasteries.filter(monastery => 
            monastery.name.english.toLowerCase().includes(query) ||
            monastery.description.english.toLowerCase().includes(query) ||
            monastery.location.district.toLowerCase().includes(query)
        );
        
        res.json({
            success: true,
            query: req.params.query,
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

module.exports = router;