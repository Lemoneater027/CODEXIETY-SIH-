// Monastery360 - Complete Data Structure
// ADD YOUR MONASTERY DATA HERE - Just replace the sample data with your actual monastery information

const MonasteryData = {
    // Sample data - Replace with your actual monastery data
    monasteries: [
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
                nepali: "रुम्तेक गुम्बा सिक्किमको सबैभन्दा ठूलो गुम्बा हो।",
                hindi: "रुम्तेक मठ सिक्किम का सबसे बड़ा मठ है।"
            },
            location: {
                latitude: 27.3389,
                longitude: 88.5583,
                address: "Rumtek, East Sikkim, Sikkim 737135",
                district: "East Sikkim",
                altitude: "1500m",
                distanceFromGangtok: "24 km"
            },
            history: {
                founded: "1740",
                founder: "12th Karmapa Changchub Dorje",
                rebuilt: "1966",
                lineage: "Karma Kagyu",
                significance: "Seat of the 17th Karmapa"
            },
            architecture: {
                style: "Traditional Tibetan",
                floors: 3,
                features: ["Golden Stupa", "Main shrine hall", "Monks quarters", "Prayer wheels", "Meditation halls"]
            },
            images: {
                main: "/images/monasteries/rumtek/main.jpg",
                gallery: [
                    "/images/monasteries/rumtek/exterior1.jpg",
                    "/images/monasteries/rumtek/interior1.jpg", 
                    "/images/monasteries/rumtek/prayer_hall.jpg",
                    "/images/monasteries/rumtek/monks.jpg",
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
                    description: "Tibetan New Year celebration"
                },
                {
                    name: "Saga Dawa", 
                    date: "May/June",
                    description: "Buddha's birth, enlightenment, and death"
                }
            ],
            digitalArchives: {
                manuscripts: ["/archives/rumtek/manuscript1.pdf"],
                historicalDocs: ["/archives/rumtek/history.pdf"],
                murals: ["/archives/rumtek/mural1.jpg", "/archives/rumtek/mural2.jpg"]
            },
            featured: true
        },
        
        // ADD MORE MONASTERIES HERE - Copy this structure for each monastery
        {
            id: "enchey_monastery",
            name: {
                english: "Enchey Monastery",
                nepali: "एन्चे गुम्बा",
                hindi: "एन्चे मठ", 
                sikkimese: "Enchey Gompa"
            },
            description: {
                english: "Enchey Monastery is an important Nyingma monastery in Gangtok, built in 1909.",
                nepali: "एन्चे गुम्बा गान्तोकको एक महत्वपूर्ण न्यिंग्मा गुम्बा हो।",
                hindi: "एन्चे मठ गंगटोक का एक महत्वपूर्ण न्यिंग्मा मठ है।"
            },
            location: {
                latitude: 27.3314,
                longitude: 88.6138,
                address: "Enchey, Gangtok, East Sikkim 737101",
                district: "East Sikkim", 
                altitude: "1900m",
                distanceFromGangtok: "3 km"
            },
            history: {
                founded: "1909",
                founder: "Lama Druptob Karpo",
                lineage: "Nyingma",
                significance: "Guardian deity Mahakala"
            },
            images: {
                main: "/images/monasteries/enchey/main.jpg",
                gallery: [
                    "/images/monasteries/enchey/exterior.jpg",
                    "/images/monasteries/enchey/interior.jpg"
                ],
                virtualTour: ["/images/360-tours/enchey/main_hall.jpg"]
            },
            featured: true
        },

        // Template for adding more monasteries - COPY AND MODIFY THIS:
        {
            id: "your_monastery_id", // Use lowercase with underscores
            name: {
                english: "Your Monastery Name",
                nepali: "Nepali Name",
                hindi: "Hindi Name",
                sikkimese: "Local Name"
            },
            description: {
                english: "Description in English",
                nepali: "Description in Nepali", 
                hindi: "Description in Hindi"
            },
            location: {
                latitude: 0.0000,  // GPS coordinates
                longitude: 0.0000,
                address: "Full address",
                district: "District name",
                altitude: "Altitude in meters",
                distanceFromGangtok: "Distance"
            },
            history: {
                founded: "Year founded",
                founder: "Founder name",
                lineage: "Buddhist lineage",
                significance: "Historical significance"
            },
            images: {
                main: "/images/monasteries/folder/main.jpg",
                gallery: [
                    "/images/monasteries/folder/image1.jpg",
                    "/images/monasteries/folder/image2.jpg"
                    // Add more images
                ],
                virtualTour: [
                    "/images/360-tours/folder/scene1.jpg"
                    // Add 360° images
                ]
            },
            audioGuides: {
                english: "/audio/guides/monastery_en.mp3",
                nepali: "/audio/guides/monastery_ne.mp3",
                hindi: "/audio/guides/monastery_hi.mp3"
            },
            visitingInfo: {
                openingHours: "Opening hours",
                entryFee: "Entry fee",
                bestTimeToVisit: "Best months",
                duration: "Visit duration",
                photography: {
                    exterior: true,
                    interior: false  // or true
                }
            },
            festivals: [
                {
                    name: "Festival name",
                    date: "Month/Date",
                    description: "Festival description"
                }
            ],
            featured: false  // Set to true for homepage display
        }
    ],

    // Cultural events and festivals
    events: [
        {
            id: "losar_2025",
            name: {
                english: "Losar - Tibetan New Year",
                nepali: "लोसार - तिब्बती नयाँ वर्ष",
                hindi: "लोसार - तिब्बती नव वर्ष"
            },
            date: "2025-02-29",
            location: "Multiple Monasteries",
            description: {
                english: "Traditional Tibetan New Year celebrations with mask dances and prayers",
                nepali: "मुखौटा नृत्य र प्रार्थनाको साथ पारम्परिक तिब्बती नयाँ वर्ष मनाइन्छ",
                hindi: "मुखौटा नृत्य और प्रार्थना के साथ पारंपरिक तिब्बती नव वर्ष"
            },
            monasteries: ["rumtek_monastery", "enchey_monastery"],
            bookingRequired: true,
            maxParticipants: 100
        }
        // ADD MORE EVENTS HERE
    ],

    // Travel routes and attractions
    travelRoutes: [
        {
            id: "gangtok_to_rumtek", 
            name: "Gangtok to Rumtek Monastery",
            distance: "24 km",
            duration: "45 minutes",
            route: [
                {lat: 27.3389, lng: 88.6065, name: "Gangtok"},
                {lat: 27.3389, lng: 88.5583, name: "Rumtek Monastery"}
            ],
            transportOptions: ["Taxi", "Shared Jeep", "Private Car"],
            cost: {
                taxi: "₹800-1000",
                sharedJeep: "₹50-80",
                privateCar: "₹1200-1500"
            }
        }
        // ADD MORE ROUTES
    ],

    // Digital archives metadata
    archives: {
        manuscripts: [
            {
                id: "manuscript_001",
                title: "Ancient Tibetan Text",
                monastery: "rumtek_monastery",
                language: "Tibetan",
                period: "18th Century",
                description: "Religious text on Buddhist philosophy",
                file: "/archives/manuscripts/ms_001.pdf",
                thumbnail: "/archives/thumbnails/ms_001.jpg"
            }
            // ADD MORE MANUSCRIPTS
        ],
        murals: [
            {
                id: "mural_001", 
                title: "Buddha Life Stories",
                monastery: "rumtek_monastery",
                location: "Main Prayer Hall",
                description: "Detailed murals depicting Buddha's life",
                images: ["/archives/murals/mural_001_1.jpg"],
                highRes: ["/archives/murals/hires/mural_001_1.jpg"]
            }
            // ADD MORE MURALS
        ]
    }
};

// Helper functions for data access
const MonasteryAPI = {
    // Get all monasteries
    getAllMonasteries() {
        return MonasteryData.monasteries;
    },
    
    // Get featured monasteries for homepage
    getFeaturedMonasteries() {
        return MonasteryData.monasteries.filter(m => m.featured);
    },
    
    // Get monastery by ID
    getMonasteryById(id) {
        return MonasteryData.monasteries.find(m => m.id === id);
    },
    
    // Get monasteries by district
    getMonasteriesByDistrict(district) {
        return MonasteryData.monasteries.filter(m => m.location.district === district);
    },
    
    // Get upcoming events
    getUpcomingEvents() {
        const today = new Date();
        return MonasteryData.events.filter(e => new Date(e.date) >= today);
    },
    
    // Search monasteries
    searchMonasteries(query, language = 'english') {
        return MonasteryData.monasteries.filter(m => 
            m.name[language].toLowerCase().includes(query.toLowerCase()) ||
            m.description[language].toLowerCase().includes(query.toLowerCase())
        );
    },
    
    // Get monastery coordinates for map
    getMonasteryCoordinates() {
        return MonasteryData.monasteries.map(m => ({
            id: m.id,
            name: m.name.english,
            lat: m.location.latitude,
            lng: m.location.longitude,
            main_image: m.images.main
        }));
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MonasteryData, MonasteryAPI };
}