const express = require('express');
const router = express.Router();

// Placeholder for events - you can expand this
router.get('/', async (req, res) => {
    try {
        // Sample events data
        const events = [
            {
                id: '1',
                name: 'Losar Festival 2025',
                date: '2025-02-29',
                location: 'Rumtek Monastery',
                description: 'Tibetan New Year celebration'
            }
        ];

        res.json({
            success: true,
            data: events
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;
