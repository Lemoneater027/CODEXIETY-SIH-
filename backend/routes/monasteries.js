const express = require('express');
const Monastery = require('../models/monastery');

const router = express.Router();

// Get all monasteries
router.get('/', async (req, res) => {
    try {
        const { 
            district, 
            featured, 
            search, 
            limit = 10,
            page = 1 
        } = req.query;

        let query = { status: 'active' };

        // Filters
        if (district && district !== 'all') {
            query['location.district'] = new RegExp(district, 'i');
        }
        
        if (featured === 'true') {
            query.featured = true;
        }
        
        if (search) {
            query.$or = [
                { 'name.english': new RegExp(search, 'i') },
                { 'description.english': new RegExp(search, 'i') }
            ];
        }

        // Pagination
        const pageSize = parseInt(limit);
        const skip = (parseInt(page) - 1) * pageSize;

        const [monasteries, total] = await Promise.all([
            Monastery.find(query)
                .skip(skip)
                .limit(pageSize)
                .sort({ featured: -1, createdAt: -1 }),
            Monastery.countDocuments(query)
        ]);

        res.json({
            success: true,
            data: monasteries,
            pagination: {
                page: parseInt(page),
                limit: pageSize,
                total,
                pages: Math.ceil(total / pageSize)
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Get monastery by ID or slug
router.get('/:identifier', async (req, res) => {
    try {
        const { identifier } = req.params;
        
        const query = identifier.match(/^[0-9a-fA-F]{24}$/) 
            ? { _id: identifier }
            : { slug: identifier };

        const monastery = await Monastery.findOne(query);
        
        if (!monastery) {
            return res.status(404).json({
                success: false,
                error: 'Monastery not found'
            });
        }

        // Increment view count
        monastery.statistics.views += 1;
        await monastery.save();

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

// Get monastery coordinates for map
router.get('/map/coordinates', async (req, res) => {
    try {
        const monasteries = await Monastery.find(
            { status: 'active' },
            {
                'name.english': 1,
                'location.coordinates': 1,
                'location.district': 1,
                'images.main': 1,
                'featured': 1,
                'slug': 1
            }
        );

        const coordinates = monasteries.map(m => ({
            id: m._id,
            name: m.name.english,
            slug: m.slug,
            lat: m.location.coordinates.latitude,
            lng: m.location.coordinates.longitude,
            district: m.location.district,
            image: m.images.main,
            featured: m.featured
        }));

        res.json({
            success: true,
            count: coordinates.length,
            data: coordinates
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;
