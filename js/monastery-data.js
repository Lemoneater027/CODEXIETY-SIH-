// Monastery360 - Complete Data Structure
// ADD YOUR MONASTERY DATA HERE - Just replace the sample data with your actual monastery information

const MonasteryData = {
    // Sample data - Replace with your actual monastery data
    monasteries: [
        {
            id: "rumtek_monastery",
            name: {
                english: "Rumtek Monastery",
                
            },
            description: {
                english: "Rumtek Monastery, about 23km from Gangtok, is one of Sikkim's most important Buddhist centers and the seat of the Karma Kagyu lineage. Originally built in the 16th century and rebuilt in the 1960s, it is famous for its golden roof, vibrant Tibetan architecture, and peaceful setting. Inside, you'll find the main prayer hall with murals and a giant Buddha statue the golden Stupa holding relics of the 16th Karmapa and the Nalanda Institute, where monks study and debate. The large courtyard hosts the colorful Cham dances. During festivals like Losar, the monastery offers sweeping views of the Gangtok Valley and the Himalayas.",
               
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
                main: "images/rumtek.jpg",
                gallery: [
                    "images/rumtek2.jpg",
                    "images/rumtek3.jpg"
                ]
            },
            audioGuides: {
                english: "audio/guides/rumtekhindi.mp3", 
                hindi: "audio/guides/rumtek_hi.mp3"
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
                manuscripts: ["archives/rumtek/manuscript1.pdf"],
                historicalDocs: ["archives/rumtek/history.pdf"],
                murals: ["archives/rumtek/mural1.jpg", "archives/rumtek/mural2.jpg"]
            },
            featured: true
        },
        
        {
            id: "dubdi_monastery",
            name: {
                english: "Dubdi Monastery",
                
            },
            description: {
                english: "Dubdi Monastery, also called Yuxam Monastery, is the oldest monastery in Sikkim, founded in 1701 by the Chogyal, King, after the coronation of the first ruler at Yuxam. The name Dubdi means the Retreat. The monastery belongs to the Ningma sect of Tibettan Buddhism. Architecturally, it's a small but historic two-story stone structure with tapering walls and a simple square design. Inside, you'll find old manuscripts, thangkas, scroll paintings, and images of Buddhist deities. The real charm of Dubdi is its location, perched on a hilltop above Yuxam, surrounded by forests, reached by a short uphill track. Visitors often it feel like stepping back in time. For travelers, it's not just about the building, but the spiritual and historical significance. This is where Sikum's Buddhist monarchy began, making it a sacred heritage site.",
               
            },
            location: {
                latitude: 27.3700,
                longitude: 88.2600,
                address: "Yuksom, West Sikkim 737113",
                district: "West Sikkim",
                altitude: "1800m",
                distanceFromGangtok: "125 km"
            },
            history: {
                founded: "1701",
                founder: "Lhatsun Chenpo, Kagyapa Lama, and Kathog Kuntu Zangpo",
                lineage: "Nyingma",
                significance: "First monastery built in Sikkim, coronation site of first Chogyal"
            },
            architecture: {
                style: "Traditional Sikkimese",
                floors: 2,
                features: ["Ancient prayer hall", "Historic murals", "Sacred relics", "Traditional architecture"]
            },
            images: {
                main: "images/dubdi.jpeg",
                gallery: [
                    "images/dubdi2.jpg",
                    "images/dubdi3.jpg"
                ]
            },
            audioGuides: {
                english: "audio/guides/dubdihindi.mp3",
                hindi: "audio/guides/dubdi_hi.mp3"
            },
            visitingInfo: {
                openingHours: "06:00 AM - 05:00 PM",
                entryFee: "Free",
                bestTimeToVisit: "March to May, October to November",
                duration: "1-2 hours",
                photography: {
                    exterior: true,
                    interior: true
                }
            },
            travelInfo: {
                transportation: ["Taxi", "Private car"],
                travelTime: "3.5 hours from Gangtok",
                parking: "Limited",
                nearbyAttractions: ["Yuksom village", "Khangchendzonga National Park"],
                accommodation: ["Tourist lodge", "Homestays"]
            },
            festivals: [
                {
                    name: "Buddha Purnima",
                    date: "May",
                    description: "Celebration of Buddha's birth"
                }
            ],
            featured: true
        },

        {
            id: "phensang_monastery",
            name: {
                english: "Phensang Monastery",
                
            },
            description: {
                english: "Phensang Monastery is one of the largest monasteries of the Ningma sect in Sikkim. It was founded in the 18th century during the reign of the third Chogyal, Chagdor Namgyal. Located on a gentle hill slope north of Gangtok, the monastery offers wide views of the surrounding valleys. It houses around 300 monks, making it an active center of Buddhist learning and rituals. Fenzang is especially famous for its annual festival held before the Sikamies New Year, Losung, featuring masked dances, cham, prayers, and cultural performances. For visitors, it's a blend of heritage, spirituality, and vibrant cultural life in Sikkim.",
            },
            location: {
                latitude: 27.7000,
                longitude: 88.5000,
                address: "Kabi, North Sikkim 737102",
                district: "North Sikkim",
                altitude: "2200m",
                distanceFromGangtok: "65 km"
            },
            history: {
                founded: "1721",
                founder: "Lama Jigme Pawo",
                lineage: "Nyingma",
                significance: "Important pilgrimage site in North Sikkim"
            },
            architecture: {
                style: "Tibetan Buddhist",
                floors: 2,
                features: ["Mountain views", "Prayer wheels", "Traditional paintings", "Meditation halls"]
            },
            images: {
                main: "images/Phensang.jpg",
                gallery: [
                    "images/phensang2.jpg",
                    "images/phensang3.jpg"
                ]
            },
            audioGuides: {
                english: "audio/guides/phensanghindi.mp3",
                hindi: "audio/guides/phensang_hi.mp3"
            },
            visitingInfo: {
                openingHours: "05:00 AM - 06:00 PM",
                entryFee: "Free",
                bestTimeToVisit: "April to June, September to November",
                duration: "1-1.5 hours",
                photography: {
                    exterior: true,
                    interior: true
                }
            },
            travelInfo: {
                transportation: ["Taxi", "Shared jeep"],
                travelTime: "2 hours from Gangtok",
                parking: "Available",
                nearbyAttractions: ["Kabi Longstok", "Seven Sisters Waterfalls"],
                accommodation: ["Hotel in Mangan", "Homestays"]
            },
            festivals: [
                {
                    name: "Drupka Teshi",
                    date: "July/August",
                    description: "First teaching of Buddha"
                }
            ],
        
            featured: true
        
    },

        {
            id: "kartok_monastery",
            name: {
                english: "Kartok Monastery",
            }, 
            description: {
                english: "Kartok Monastery is a small but culturally significant monastery located in Yuksem, West Sikkim. It was established by one of the three revered lamas who crowned the first Chogyal, king of Sikkim in the 17th century. The monastery follows the Nyingma sect of Tibetan Buddhism. Though modest in size, it is an important spiritual site for locals and is surrounded by natural beauty lush forests and a serene landscape. A highlight for visitors is the nearby Kartok Lake, considered sacred, adding to the monastery's charm and peaceful atmosphere.",
               
            },
            location: {
                latitude: 27.4500,
                longitude: 88.4500,
                address: "Kartok, East Sikkim 737132",
                district: "East Sikkim",
                altitude: "1700m",
                distanceFromGangtok: "35 km"
            },
            history: {
                founded: "1675",
                founder: "Kartok Lama",
                lineage: "Kartok (Kagyu)",
                significance: "Center of Kartok tradition in Sikkim"
            },
            architecture: {
                style: "Traditional Tibetan",
                floors: 3,
                features: ["Ornate carvings", "Traditional murals", "Prayer hall", "Library"]
            },
            images: {
                main: "images/Kartok.jpg",
                gallery: [
                    "images/kartok2.jpg",
                    "images/kartok3.jpg"
                ]
            },
            audioGuides: {
                english: "audio/guides/kartokhindi.mp3",
                hindi: "audio/guides/kartok_hi.mp3"
            },
            visitingInfo: {
                openingHours: "06:00 AM - 06:00 PM",
                entryFee: "Free",
                bestTimeToVisit: "March to May, September to November",
                duration: "1-2 hours",
                photography: {
                    exterior: true,
                    interior: false
                }
            },
            travelInfo: {
                transportation: ["Taxi", "Private car"],
                travelTime: "1 hour from Gangtok",
                parking: "Available",
                nearbyAttractions: ["Tsomgo Lake", "Baba Harbhajan Singh Temple"],
                accommodation: ["Hotels in Gangtok"]
            },
            festivals: [
                {
                    name: "Kartok Festival",
                    date: "October",
                    description: "Annual monastery festival with traditional dances"
                }
            ],
       
            featured: true
        },
        
        {
            id: "phodong_monastery",
            name: {
                english: "Phodong Monastery"
                
            },
            description: {
                english: "Phodong Monastery, situated in North Sikkim near Gangtok, is one of the oldest and most revered monasteries in the region. It belongs to the Kagyu sect of Tibetan Buddhism, which emphasizes meditation and monastic discipline. Originally established in the 16th century, it was reconstructed in the 18th century and has since remained a vital center for spiritual learning and rituals. The monastery sits on a gentle hillside, surrounded by lush forests and rolling hills, offering visitors a tranquil atmosphere ideal for meditation and reflection. Inside, Fodang houses intricate thangkas, ancient scriptures, and statues of Buddhist deities, showcasing centuries-old artistic and religious traditions. Fodong is also well known for its annual festivals, particularly the masked dances called Cham, which depict stories from Buddhist mythology. These festivals draw both locals and tourists, providing a glimpse into the rich cultural and spiritual heritage of Sikkim.",
                
            },
            location: {
                latitude: 27.6000,
                longitude: 88.5500,
                address: "Phodong, North Sikkim 737133",
                district: "North Sikkim",
                altitude: "1500m",
                distanceFromGangtok: "38 km"
            },
            history: {
                founded: "1740",
                founder: "Chagdor Namgyal",
                lineage: "Kagyu",
                significance: "Royal monastery of former Sikkimese rulers"
            },
            architecture: {
                style: "Royal Sikkimese",
                floors: 4,
                features: ["Ancient murals", "Royal chambers", "Traditional library", "Golden stupas"]
            },
            images: {
                main: "images/Phodong.jpg",
                gallery: [
                    "images/phodong1.jpg",
                    "images/phodong2.jpg"
                ]
            },
            audioGuides: {
                english: "audio/guides/Phodonghindi.mp3",
                hindi: "audio/guides/phodong_hi.mp3"
            },
            visitingInfo: {
                openingHours: "06:00 AM - 05:00 PM",
                entryFee: "₹20 for Indians, ₹50 for foreigners",
                bestTimeToVisit: "March to May, September to November",
                duration: "2-3 hours",
                photography: {
                    exterior: true,
                    interior: true
                }
            },
            travelInfo: {
                transportation: ["Taxi", "Shared jeep"],
                travelTime: "1.5 hours from Gangtok",
                parking: "Available",
                nearbyAttractions: ["Labrang Monastery", "Seven Sisters Waterfalls"],
                accommodation: ["Hotels in Mangan"]
            },
            festivals: [
                {
                    name: "Phodong Chaam",
                    date: "December",
                    description: "Annual masked dance festival"
                }
            ],
            featured: true
        },

        {
            id: "tashiding_monastery",
            name: {
                english: "Tashiding Monastery",
                
            },
            description: {
                english: "Tashiding Monastery is located in South Sikkim, near the town of Namche, and is one of the most sacred monasteries in the state. Founded in the 17th century by Lama Lhatsun Chempo, it belongs to the Nyingma sect of Tibetan Buddhism. The name Tashiding means the devoted to auspiciousness, reflecting its spiritual significance. The monastery is perched on a hilltop overlooking the Rangit River Valley, surrounded by dense forests and rolling hills. Its serene location adds to its spiritual aura, making it a major pilgrimage site. Inside, visitors can see ancient scriptures, beautiful thangkas, and statues of Buddhist deities, all maintained with traditional care. Tashiding is famous for the Bumchu festival, held annually around February or March, when a sacred water vase is opened to predict the year's fortunes. The monastery's architecture, peaceful environment, and panoramic views attract both pilgrims and tourists.",
               
            },
            location: {
                latitude: 27.3000,
                longitude: 88.2000,
                address: "Tashiding, West Sikkim 737113",
                district: "West Sikkim",
                altitude: "1465m",
                distanceFromGangtok: "118 km"
            },
            history: {
                founded: "1717",
                founder: "Ngadak Sempa Chenpo",
                lineage: "Nyingma",
                significance: "Sacred site blessed by Guru Rinpoche"
            },
            architecture: {
                style: "Traditional Nyingma",
                floors: 2,
                features: ["Sacred chortens", "Prayer flags", "Mountain views", "Holy water ceremony site"]
            },
            images: {
                main: "images/Tashiding.png",
                gallery: [
                    "images/tashiding2.jpg",
                    "images/tashiding3.jpg"
                ]
            },
            audioGuides: {
                english: "audio/guides/taishidinghindi.mp3",
                hindi: "audio/guides/taishidinghindi.mp3"
            },
            visitingInfo: {
                openingHours: "06:00 AM - 06:00 PM",
                entryFee: "Free",
                bestTimeToVisit: "October to May",
                duration: "2-3 hours",
                photography: {
                    exterior: true,
                    interior: true
                }
            },
            travelInfo: {
                transportation: ["Taxi", "Private car"],
                travelTime: "3 hours from Gangtok",
                parking: "Limited",
                nearbyAttractions: ["Khecheopalri Lake", "Pemayangtse Monastery"],
                accommodation: ["Hotels in Pelling", "Monastery guest house"]
            },
            festivals: [
                {
                    name: "Bhumchu",
                    date: "February/March",
                    description: "Sacred water ceremony for prosperity prediction"
                },
                {
                    name: "Saga Dawa",
                    date: "May/June",
                    description: "Most auspicious festival with special significance"
                }
            ],
            featured: true
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
            monasteries: ["rumtek_monastery", "phensang_monastery", "phodong_monastery"],
            bookingRequired: true,
            maxParticipants: 100
        },
        {
            id: "bhumchu_2025",
            name: {
                english: "Bhumchu Festival",
                nepali: "भुम्चु पर्व",
                hindi: "भुम्चु त्योहार"
            },
            date: "2025-02-20",
            location: "Tashiding Monastery",
            description: {
                english: "Sacred water ceremony where the level of holy water predicts the year's prosperity",
                nepali: "पवित्र पानीको समारोह जसले वर्षको समृद्धिको भविष्यवाणी गर्छ",
                hindi: "पवित्र जल समारोह जो वर्ष की समृद्धि की भविष्यवाणी करता है"
            },
            monasteries: ["tashiding_monastery"],
            bookingRequired: false,
            maxParticipants: 200
        }
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
        },
        {
            id: "gangtok_to_tashiding",
            name: "Gangtok to Tashiding Monastery", 
            distance: "118 km",
            duration: "3 hours",
            route: [
                {lat: 27.3389, lng: 88.6065, name: "Gangtok"},
                {lat: 27.3000, lng: 88.2000, name: "Tashiding Monastery"}
            ],
            transportOptions: ["Taxi", "Private Car"],
            cost: {
                taxi: "₹2500-3000",
                privateCar: "₹3500-4000"
            }
        }
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
                file: "archives/manuscripts/ms_001.pdf",
                thumbnail: "archives/thumbnails/ms_001.jpg"
            },
            {
                id: "manuscript_002",
                title: "Phodong Royal Chronicles",
                monastery: "phodong_monastery",
                language: "Tibetan",
                period: "17th Century",
                description: "Historical chronicles of Sikkimese royalty",
                file: "archives/manuscripts/ms_002.pdf",
                thumbnail: "archives/thumbnails/ms_002.jpg"
            }
        ],
        murals: [
            {
                id: "mural_001", 
                title: "Buddha Life Stories",
                monastery: "rumtek_monastery",
                location: "Main Prayer Hall",
                description: "Detailed murals depicting Buddha's life",
                images: ["archives/murals/mural_001_1.jpg"],
                highRes: ["archives/murals/hires/mural_001_1.jpg"]
            },
            {
                id: "mural_002", 
                title: "Tashiding Sacred Art",
                monastery: "tashiding_monastery",
                location: "Inner Sanctum",
                description: "Ancient murals showing Guru Rinpoche's teachings",
                images: ["archives/murals/mural_002_1.jpg"],
                highRes: ["archives/murals/hires/mural_002_1.jpg"]
            }
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
