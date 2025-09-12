const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Security and performance middleware
app.use(helmet({
    contentSecurityPolicy: false, // Disabled for Google Maps and external scripts
    crossOriginEmbedderPolicy: false
}));
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Complete Monastery Data - Enhanced from your team's data
const MONASTERY_DATABASE = [
    {
        id: "rumtek_monastery",
        name: {
            english: "Rumtek Monastery",
            nepali: "रुम्तेक गुम्बा",
            hindi: "रुम्तेक मठ",
            sikkimese: "Rumtek Gompa"
        },
        description: {
            english: "Rumtek Monastery is the largest monastery in Sikkim and is the seat-in-exile of the Gyalwa Karmapa, head of the Karma Kagyu lineage of Tibetan Buddhism.",
            nepali: "रुम्तेक गुम्बा सिक्किमको सबैभन्दा ठूलो गुम्बा हो र कर्मा काग्यु वंशका ग्यालवा कर्मापाको निर्वासनमा रहेको सिट हो।",
            hindi: "रुम्तेक मठ सिक्किम का सबसे बड़ा मठ है और तिब्बती बौद्ध धर्म की कर्मा काग्यु वंशावली के प्रमुख ग्यालवा कर्मापा का निर्वासन में स्थान है।"
        },
        location: {
            latitude: 27.3389,
            longitude: 88.5583,
            address: "Rumtek, East Sikkim, Sikkim 737135",
            district: "East Sikkim",
            altitude: "1500m above sea level",
            distanceFromGangtok: "24 km"
        },
        history: {
            founded: "1740",
            founder: "12th Karmapa Changchub Dorje",
            rebuilt: "1966",
            lineage: "Karma Kagyu",
            significance: "Seat of the 17th Karmapa Ogyen Trinley Dorje"
        },
        architecture: {
            style: "Traditional Tibetan",
            floors: 3,
            features: ["Golden Stupa", "Main shrine hall", "Monks quarters", "Prayer wheels", "Meditation halls", "Library"]
        },
        images: {
            main: "/images/monasteries/rumtek/main.jpg",
            gallery: [
                "/images/monasteries/rumtek/exterior1.jpg",
                "/images/monasteries/rumtek/interior1.jpg",
                "/images/monasteries/rumtek/prayer_hall.jpg",
                "/images/monasteries/rumtek/golden_stupa.jpg"
            ],
            virtualTour: [
                "/images/360-tours/rumtek/entrance.jpg",
                "/images/360-tours/rumtek/main_hall.jpg",
                "/images/360-tours/rumtek/prayer_hall.jpg",
                "/images/360-tours/rumtek/courtyard.jpg"
            ]
        },
        audioGuides: {
            english: "/audio/guides/rumtek_en.mp3",
            nepali: "/audio/guides/rumtek_ne.mp3",
            hindi: "/audio/guides/rumtek_hi.mp3"
        },
        visitingInfo: {
            openingHours: "06:00 AM - 06:00 PM",
            entryFee: "Free",
            bestTimeToVisit: "March to May, September to November",
            duration: "2-3 hours",
            photography: {
                exterior: true,
                interior: false
            },
            dressCode: "Modest clothing required"
        },
        travelInfo: {
            transportation: ["Taxi", "Shared jeep", "Private car"],
            travelTime: "45 minutes from Gangtok",
            parking: "Available",
            nearbyAttractions: ["Lingdum Monastery", "Saramsa Garden"],
            accommodation: ["Hotel Rumtek", "Monastery guest house"]
        },
        festivals: [
            {
                name: "Losar",
                date: "February/March",
                description: "Tibetan New Year celebration with mask dances"
            },
            {
                name: "Saga Dawa",
                date: "May/June",
                description: "Celebration of Buddha's birth, enlightenment, and death"
            }
        ],
        digitalArchives: {
            manuscripts: ["/archives/rumtek/manuscript1.pdf"],
            historicalDocs: ["/archives/rumtek/history.pdf"],
            murals: ["/archives/rumtek/mural1.jpg", "/archives/rumtek/mural2.jpg"]
        },
        featured: true
    },
    {
        id: "enchey_monastery",
        name: {
            english: "Enchey Monastery",
            nepali: "एन्चे गुम्बा",
            hindi: "एन्चे मठ",
            sikkimese: "Enchey Gompa"
        },
        description: {
            english: "Enchey Monastery is a 200-year-old monastery belonging to the Nyingma order of Buddhism. Built in 1909, it is located on a hilltop in Gangtok.",
            nepali: "एन्चे गुम्बा बौद्ध धर्मको न्यिङ्मा सम्प्रदायको २०० वर्ष पुरानो गुम्बा हो। १९०९ मा निर्मित, यो गान्तोकको पहाडी टुप्पोमा अवस्थित छ।",
            hindi: "एन्चे मठ बौद्ध धर्म के न्यिंग्मा संप्रदाय का 200 साल पुराना मठ है। 1909 में निर्मित, यह गंगटोक की एक पहाड़ी पर स्थित है।"
        },
        location: {
            latitude: 27.3314,
            longitude: 88.6138,
            address: "Enchey, Gangtok, East Sikkim 737101",
            district: "East Sikkim",
            altitude: "1900m above sea level",
            distanceFromGangtok: "3 km"
        },
        history: {
            founded: "1909",
            founder: "Lama Druptob Karpo",
            lineage: "Nyingma",
            significance: "Guardian deity Mahakala worship center"
        },
        architecture: {
            style: "Sikkimese Traditional",
            floors: 2,
            features: ["Main prayer hall", "Statue of Guru Rinpoche", "Traditional murals", "Bell tower"]
        },
        images: {
            main: "/images/monasteries/enchey/main.jpg",
            gallery: [
                "/images/monasteries/enchey/exterior.jpg",
                "/images/monasteries/enchey/interior.jpg",
                "/images/monasteries/enchey/prayer_hall.jpg"
            ],
            virtualTour: [
                "/images/360-tours/enchey/main_hall.jpg",
                "/images/360-tours/enchey/prayer_room.jpg"
            ]
        },
        audioGuides: {
            english: "/audio/guides/enchey_en.mp3",
            nepali: "/audio/guides/enchey_ne.mp3",
            hindi: "/audio/guides/enchey_hi.mp3"
        },
        visitingInfo: {
            openingHours: "05:00 AM - 07:00 PM",
            entryFee: "Free",
            bestTimeToVisit: "Year round",
            duration: "1-2 hours",
            photography: {
                exterior: true,
                interior: true
            }
        },
        travelInfo: {
            transportation: ["Walking", "Taxi", "Local bus"],
            travelTime: "15 minutes from Gangtok center",
            parking: "Limited",
            nearbyAttractions: ["Ganesh Tok", "Hanuman Tok"]
        },
        festivals: [
            {
                name: "Cham Dance",
                date: "December/January",
                description: "Traditional masked dance performance"
            }
        ],
        featured: true
    },
    {
        id: "pemayangtse_monastery",
        name: {
            english: "Pemayangtse Monastery",
            nepali: "पेमायाङत्से गुम्बा",
            hindi: "पेमायांगत्से मठ",
            sikkimese: "Pemayangtse Gompa"
        },
        description: {
            english: "Pemayangtse Monastery is one of the oldest and most important monasteries in Sikkim, belonging to the Nyingma order. It was built in 1705.",
            nepali: "पेमायाङत्से गुम्बा सिक्किमको सबैभन्दा पुरानो र महत्वपूर्ण गुम्बाहरू मध्ये एक हो, न्यिङ्मा सम्प्रदायसँग सम्बन्धित छ। यो १७०५ मा निर्मित भएको थियो।",
            hindi: "पेमायांगत्से मठ सिक्किम के सबसे पुराने और महत्वपूर्ण मठों में से एक है, जो न्यिंग्मा संप्रदाय से संबंधित है। यह 1705 में बनाया गया था।"
        },
        location: {
            latitude: 27.2120,
            longitude: 88.2065,
            address: "Pelling, West Sikkim 737113",
            district: "West Sikkim",
            altitude: "2085m above sea level",
            distanceFromGangtok: "115 km"
        },
        history: {
            founded: "1705",
            founder: "Lama Lhatsun Chempo",
            lineage: "Nyingma",
            significance: "Head monastery of Nyingma order in Sikkim"
        },
        architecture: {
            style: "Traditional Tibetan",
            floors: 3,
            features: ["Seven-tier wooden sculpture", "Ancient murals", "Prayer wheels", "Meditation caves"]
        },
        images: {
            main: "/images/monasteries/pemayangtse/main.jpg",
            gallery: [
                "/images/monasteries/pemayangtse/exterior.jpg",
                "/images/monasteries/pemayangtse/sculpture.jpg",
                "/images/monasteries/pemayangtse/view.jpg"
            ],
            virtualTour: [
                "/images/360-tours/pemayangtse/entrance.jpg",
                "/images/360-tours/pemayangtse/main_hall.jpg"
            ]
        },
        visitingInfo: {
            openingHours: "07:00 AM - 05:00 PM",
            entryFee: "Free",
            bestTimeToVisit: "March to May, October to December",
            duration: "2-3 hours"
        },
        travelInfo: {
            transportation: ["Taxi", "Private car"],
            travelTime: "3 hours from Gangtok",
            nearbyAttractions: ["Khecheopalri Lake", "Kanchenjunga Falls"]
        },
        featured: true
    },
    {
        id: "tashiding_monastery",
        name: {
            english: "Tashiding Monastery",
            nepali: "तशिदिङ गुम्बा",
            hindi: "तशिदिंग मठ",
            sikkimese: "Tashiding Gompa"
        },
        description: {
            english: "Tashiding Monastery is located on a hilltop between Gyalshing and Yuksom in West Sikkim. It is considered one of the most sacred monasteries in Sikkim.",
            nepali: "तशिदिङ गुम्बा पश्चिम सिक्किमको ग्यालशिङ र युकसोम बीचको पहाडी टुप्पोमा अवस्थित छ। यसलाई सिक्किमको सबैभन्दा पवित्र गुम्बाहरू मध्ये एक मानिन्छ।",
            hindi: "तशिदिंग मठ पश्चिम सिक्किम में ग्यालशिंग और युकसोम के बीच एक पहाड़ी पर स्थित है। इसे सिक्किम के सबसे पवित्र मठों में से एक माना जाता है।"
        },
        location: {
            latitude: 27.3000,
            longitude: 88.2000,
            address: "Tashiding, West Sikkim 737113",
            district: "West Sikkim",
            altitude: "1465m above sea level",
            distanceFromGangtok: "118 km"
        },
        history: {
            founded: "1717",
            founder: "Ngadak Sempa Chenpo",
            lineage: "Nyingma",
            significance: "Sacred site blessed by Guru Rinpoche"
        },
        visitingInfo: {
            openingHours: "06:00 AM - 06:00 PM",
            entryFee: "Free",
            bestTimeToVisit: "October to May",
            duration: "2-3 hours"
        },
        festivals: [
            {
                name: "Bhumchu",
                date: "February/March",
                description: "Sacred water ceremony for prosperity prediction"
            }
        ],
        featured: true
    },
    {
        id: "lingdum_monastery",
        name: {
            english: "Lingdum Monastery",
            nepali: "लिङदुम गुम्बा",
            hindi: "लिंगदुम मठ",
            sikkimese: "Lingdum Gompa"
        },
        description: {
            english: "Lingdum Monastery is a relatively new monastery built in 1999, following the Zurmang Kagyu tradition of Tibetan Buddhism.",
            nepali: "लिङदुम गुम्बा १९९९ मा निर्मित अपेक्षाकृत नयाँ गुम्बा हो, जुन तिब्बती बौद्ध धर्मको जुरमाङ काग्यु परम्परालाई पछ्याउँछ।",
            hindi: "लिंगदुम मठ 1999 में निर्मित एक अपेक्षाकृत नया मठ है, जो तिब्बती बौद्ध धर्म की ज़ुर्मांग काग्यु परंपरा का पालन करता है।"
        },
        location: {
            latitude: 27.2833,
            longitude: 88.5167,
            address: "Ranka, East Sikkim 737135",
            district: "East Sikkim",
            altitude: "1800m above sea level",
            distanceFromGangtok: "17 km"
        },
        history: {
            founded: "1999",
            founder: "12th Zurmang Gharwang Rinpoche",
            lineage: "Zurmang Kagyu"
        },
        visitingInfo: {
            openingHours: "06:00 AM - 06:00 PM",
            entryFee: "Free",
            bestTimeToVisit: "Year round"
        },
        featured: false
    }
];

// Events Data
let eventsDatabase = [
    {
        id: "losar_2025",
        name: "Losar - Tibetan New Year 2025",
        date: "2025-02-29",
        endDate: "2025-03-03",
        location: "Multiple Monasteries",
        monasteryId: "rumtek_monastery",
        description: "Traditional Tibetan New Year celebrations with mask dances, prayers, and cultural performances",
        maxParticipants: 200,
        currentBookings: 45,
        price: "Free",
        category: "Cultural Festival",
        activities: ["Mask Dances", "Traditional Music", "Prayer Ceremonies", "Cultural Exhibitions"]
    },
    {
        id: "saga_dawa_2025",
        name: "Saga Dawa Festival",
        date: "2025-05-15",
        endDate: "2025-05-17",
        location: "Rumtek Monastery",
        monasteryId: "rumtek_monastery",
        description: "Celebration of Buddha's birth, enlightenment, and death with special prayers and ceremonies",
        maxParticipants: 150,
        currentBookings: 23,
        price: "Free",
        category: "Religious Festival"
    },
    {
        id: "enchey_cham_dance",
        name: "Enchey Cham Dance",
        date: "2025-12-15",
        location: "Enchey Monastery",
        monasteryId: "enchey_monastery",
        description: "Traditional masked dance performance depicting the victory of good over evil",
        maxParticipants: 80,
        currentBookings: 8,
        price: "₹50 per person",
        category: "Cultural Performance"
    }
];

// Bookings Database
let bookingsDatabase = [];

// API Routes

// Health Check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        message: 'Monastery360 Backend is running perfectly!',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        features: ['Monasteries API', 'Events API', 'Bookings API', 'Map Integration', 'PWA Support']
    });
});

// Monasteries API Routes
app.get('/api/monasteries', (req, res) => {
    try {
        const { district, featured, limit, search } = req.query;
        let monasteries = [...MONASTERY_DATABASE];
        
        // Filter by district
        if (district && district !== 'all') {
            monasteries = monasteries.filter(m => 
                m.location.district.toLowerCase().includes(district.toLowerCase())
            );
        }
        
        // Filter featured
        if (featured === 'true') {
            monasteries = monasteries.filter(m => m.featured);
        }
        
        // Search functionality
        if (search) {
            const searchTerm = search.toLowerCase();
            monasteries = monasteries.filter(m =>
                m.name.english.toLowerCase().includes(searchTerm) ||
                m.description.english.toLowerCase().includes(searchTerm) ||
                m.location.district.toLowerCase().includes(searchTerm)
            );
        }
        
        // Limit results
        if (limit) {
            monasteries = monasteries.slice(0, parseInt(limit));
        }
        
        res.json({
            success: true,
            count: monasteries.length,
            total: MONASTERY_DATABASE.length,
            data: monasteries
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch monasteries',
            message: error.message
        });
    }
});

app.get('/api/monasteries/:id', (req, res) => {
    try {
        const monastery = MONASTERY_DATABASE.find(m => m.id === req.params.id);
        
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
            error: 'Failed to fetch monastery',
            message: error.message
        });
    }
});

// Map API - Get monastery coordinates for map
app.get('/api/map/monasteries', (req, res) => {
    try {
        const coordinates = MONASTERY_DATABASE.map(m => ({
            id: m.id,
            name: m.name.english,
            lat: m.location.latitude,
            lng: m.location.longitude,
            district: m.location.district,
            altitude: m.location.altitude,
            main_image: m.images.main,
            description: m.description.english.substring(0, 100) + '...',
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
            error: 'Failed to fetch map data',
            message: error.message
        });
    }
});

// Events API Routes
app.get('/api/events', (req, res) => {
    try {
        const { upcoming, monasteryId, category } = req.query;
        let events = [...eventsDatabase];
        
        // Filter upcoming events
        if (upcoming === 'true') {
            const today = new Date();
            events = events.filter(e => new Date(e.date) >= today);
        }
        
        // Filter by monastery
        if (monasteryId) {
            events = events.filter(e => e.monasteryId === monasteryId);
        }
        
        // Filter by category
        if (category) {
            events = events.filter(e => e.category === category);
        }
        
        res.json({
            success: true,
            count: events.length,
            data: events
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch events',
            message: error.message
        });
    }
});

app.get('/api/events/:id', (req, res) => {
    try {
        const event = eventsDatabase.find(e => e.id === req.params.id);
        
        if (!event) {
            return res.status(404).json({
                success: false,
                error: 'Event not found'
            });
        }
        
        res.json({
            success: true,
            data: event
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch event',
            message: error.message
        });
    }
});

// Bookings API Routes
app.post('/api/bookings', (req, res) => {
    try {
        const { eventId, userName, userEmail, userPhone, seats, specialRequests } = req.body;
        
        // Validation
        if (!eventId || !userName || !userEmail || !seats) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields: eventId, userName, userEmail, seats'
            });
        }
        
        // Check if event exists
        const eventIndex = eventsDatabase.findIndex(e => e.id === eventId);
        if (eventIndex === -1) {
            return res.status(404).json({
                success: false,
                error: 'Event not found'
            });
        }
        
        const event = eventsDatabase[eventIndex];
        
        // Check availability
        const totalSeats = parseInt(seats);
        const currentBookings = event.currentBookings || 0;
        
        if (currentBookings + totalSeats > event.maxParticipants) {
            return res.status(400).json({
                success: false,
                error: 'Not enough seats available',
                availableSeats: event.maxParticipants - currentBookings
            });
        }
        
        // Create booking
        const booking = {
            id: `BK${Date.now()}${Math.floor(Math.random() * 1000)}`,
            eventId,
            eventName: event.name,
            userName,
            userEmail,
            userPhone: userPhone || '',
            seats: totalSeats,
            specialRequests: specialRequests || '',
            bookingDate: new Date().toISOString(),
            status: 'confirmed',
            totalAmount: event.price === 'Free' ? 0 : parseFloat(event.price.replace('₹', '').replace(' per person', '')) * totalSeats
        };
        
        bookingsDatabase.push(booking);
        
        // Update event bookings
        eventsDatabase[eventIndex].currentBookings = currentBookings + totalSeats;
        
        res.status(201).json({
            success: true,
            message: 'Booking confirmed successfully!',
            data: booking
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to create booking',
            message: error.message
        });
    }
});

app.get('/api/bookings', (req, res) => {
    try {
        res.json({
            success: true,
            count: bookingsDatabase.length,
            data: bookingsDatabase
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch bookings',
            message: error.message
        });
    }
});

// Statistics API
app.get('/api/stats', (req, res) => {
    try {
        const stats = {
            totalMonasteries: MONASTERY_DATABASE.length,
            featuredMonasteries: MONASTERY_DATABASE.filter(m => m.featured).length,
            totalEvents: eventsDatabase.length,
            upcomingEvents: eventsDatabase.filter(e => new Date(e.date) >= new Date()).length,
            totalBookings: bookingsDatabase.length,
            districts: [...new Set(MONASTERY_DATABASE.map(m => m.location.district))],
            lineages: [...new Set(MONASTERY_DATABASE.map(m => m.history.lineage).filter(l => l))]
        };
        
        res.json({
            success: true,
            data: stats
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch statistics',
            message: error.message
        });
    }
});

// PWA Manifest
app.get('/manifest.json', (req, res) => {
    const manifest = {
        "name": "Monastery360 - Digital Heritage Platform",
        "short_name": "Monastery360",
        "description": "Explore Sikkim's monasteries through immersive digital experiences",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#8B4513",
        "theme_color": "#D4A574",
        "orientation": "portrait-primary",
        "icons": [
            {
                "src": "/assets/icons/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/assets/icons/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "any maskable"
            }
        ],
        "categories": ["travel", "tourism", "culture", "education"],
        "lang": "en",
        "dir": "ltr"
    };
    
    res.json(manifest);
});

// Service Worker
app.get('/sw.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.send(`
const CACHE_NAME = 'monastery360-v1.0.0';
const urlsToCache = [
    '/',
    '/css/styles.css',
    '/js/main.js',
    '/js/monastery-data.js',
    '/js/interactive-map.js',
    '/js/virtual-tour.js',
    '/api/monasteries',
    '/api/events',
    '/api/map/monasteries'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
    `);
});

// Serve frontend files for all other routes
app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ 
            success: false,
            error: 'API endpoint not found' 
        });
    }
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server Error:', err.stack);
    res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
    🏔️  Monastery360 Backend Server Running Successfully!
    📍 Port: ${PORT}
    🌐 Frontend: http://localhost:${PORT}
    🔌 API Health: http://localhost:${PORT}/api/health
    🏛️ Monasteries API: http://localhost:${PORT}/api/monasteries
    🎭 Events API: http://localhost:${PORT}/api/events
    🗺️ Map API: http://localhost:${PORT}/api/map/monasteries
    📊 Statistics: http://localhost:${PORT}/api/stats
    📱 PWA Manifest: http://localhost:${PORT}/manifest.json
    
    ✅ Complete Features Ready:
    - ${MONASTERY_DATABASE.length} Monasteries Database
    - ${eventsDatabase.length} Cultural Events
    - Interactive Map API
    - Virtual Tour Support
    - PWA Functionality
    - Event Booking System
    - Multi-language Support
    
    🎯 SIH 2025 Project Ready for Demo!
    `);
});