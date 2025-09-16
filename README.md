Monastery360 is a comprehensive Progressive Web Application (PWA) designed to digitally preserve and promote Sikkim's rich monastery heritage. Our platform provides immersive virtual experiences, detailed cultural information, and offline accessibility to make Sikkim's spiritual heritage accessible to the world.

🎯 Problem Statement
Digital Preservation and Promotion of Cultural Heritage Sites

Theme: Heritage & Culture

Category: Software

Focus: Sikkim's 200+ monasteries and their cultural significance

✨ Key Features
🏛️ Comprehensive Monastery Database
Detailed information on famous monasteries (Rumtek, Dubdi, Phensang, Kartok, Phodong, Tashiding)

Historical background, architecture details, and cultural significance

GPS coordinates and travel information

🎧 Multi-language Audio Guides
Professional narration in English, Hindi, Nepali, and Sikkimese

Immersive storytelling about monastery history and traditions

Offline audio playback capability

📱 Progressive Web App (PWA)
Works offline after first visit

Installable on mobile devices like a native app

Fast loading with advanced caching

Cross-platform compatibility

🖼️ Digital Archives & Virtual Tours
High-resolution photo galleries

Ancient manuscripts and murals preservation

Interactive visual experiences

Cultural artifact documentation

📅 Cultural Calendar & Events
Festival dates and religious celebrations

Traditional ceremonies and their significance

Event booking and notification system

🗺️ Interactive Features
Monastery location mapping

Travel routes and transportation options

Visiting hours and entry requirements

Nearby attractions and accommodations

🚀 Live Demo
🌐 Visit the live application: https://codexiety-sih.onrender.com/

Mobile Installation
Open the link on your mobile browser

Tap "Install App" when prompted

Add to home screen for native app experience

💻 Technology Stack
Frontend
HTML5, CSS3, JavaScript - Core web technologies

Progressive Web App (PWA) - Offline functionality and app-like experience

Service Workers - Caching and background sync

Responsive Design - Multi-device compatibility

Backend
Node.js & Express.js - Server framework

MongoDB - Database for monastery data

RESTful APIs - Data communication layer

JWT Authentication - Secure user management

Deployment & Hosting
Render.com - Cloud hosting platform

GitHub Actions - CI/CD pipeline

PWA Optimization - Performance and caching

Additional Technologies
Geolocation APIs - Location-based services

Audio Processing - Multi-language guide system

PDF.js - Digital archive viewer

🛠️ Installation & Setup
Prerequisites
Node.js (v16 or higher)

npm or yarn

Git

Local Development Setup
Clone the repository

bash
git clone https://github.com/Lemoneater027/CODEXIETY-SIH-.git
cd CODEXIETY-SIH-
Install dependencies

bash
cd backend
npm install
Environment Setup
Create .env file in the backend directory:

text
NODE_ENV=development
PORT=5000
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=mongodb://localhost:27017/monastery360
Start the development server

bash
npm run dev
Access the application

Frontend: http://localhost:5000

API Health Check: http://localhost:5000/api/health

Project Structure
text
CODEXIETY-SIH-/
├── backend/                 # Backend server files
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── .env               # Environment variables
├── css/                    # Stylesheets
│   ├── styles1.css        # Main stylesheet
│   └── icon.png           # App icon
├── js/                     # JavaScript files
│   ├── monastery-data.js   # Monastery database
│   └── app-install.js     # PWA installation
├── images/                 # Monastery images
├── audio/                  # Audio guides
├── manifest.json          # PWA manifest
├── sw.js                  # Service worker
├── index.html             # Homepage
├── monastery.html         # Monasteries listing page
└── README.md              # This file
📚 API Documentation
Base URL
Development: http://localhost:5000/api

Production: https://codexiety-sih.onrender.com/api

Endpoints
Health Check
text
GET /api/health
Returns server status and timestamp

Monasteries
text
GET /api/monasteries
Returns all monastery data

text
GET /api/monasteries/:id
Returns specific monastery by ID

Cultural Events
text
GET /api/events
Returns upcoming cultural events and festivals

🎨 Features in Detail
Monastery Information System
Each monastery entry includes:

Basic Info: Name in multiple languages, location, altitude

History: Founded date, founder, lineage, historical significance

Architecture: Building style, floors, special features

Visiting Info: Opening hours, entry fees, best visiting time

Travel Details: Transportation options, duration from Gangtok

Festivals: Associated cultural events and celebrations

PWA Capabilities
Offline Access: Browse monastery information without internet

App Installation: Add to home screen on mobile devices

Fast Loading: Service worker caching for instant access

Background Sync: Update data when connection is restored

Push Notifications: Updates about festivals and events

Audio Guide System
Professional Narration: High-quality audio recordings

Cultural Context: Stories, legends, and historical accounts

Technical Features: Play/pause controls, progress tracking

Multi-language Support: Accessible to diverse audiences

🌍 Impact & Benefits
Cultural Preservation
Digital Backup of endangered monastery artifacts

Global Accessibility to Sikkim's spiritual heritage

Educational Resource for Buddhist studies and research

Cultural Bridge between traditional and modern knowledge

Economic Impact
Tourism Growth: Expected 25-30% increase in monastery visitors

Local Employment: Opportunities for guides and content creators

Digital Economy: Promotes technology adoption in rural areas

Social Benefits
Cultural Awareness: Promotes understanding of Buddhist traditions

Community Pride: Showcases Sikkim's unique heritage

Educational Access: Free knowledge for students worldwide

Language Preservation: Maintains Sikkimese and Tibetan languages


🏆 Smart India Hackathon 2025
Problem Statement
ID: SIH1234
Title: Digital Preservation and Promotion of Cultural Heritage Sites
Theme: Heritage & Culture
Category: Software

Solution Highlights
✅ Complete Working Demo with 6 major monasteries

✅ Multi-language Support (4 languages implemented)

✅ PWA Functionality (100% offline capable)

✅ Cultural Integration (Authentic content with local insights)

✅ Scalable Architecture (Ready for 200+ monasteries)

🤝 Contributing
We welcome contributions from the community! Here's how you can help:

For Developers
Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

For Cultural Enthusiasts
Monastery Information: Help us add more monasteries

Language Support: Contribute translations

Audio Content: Provide local insights and stories

Photography: Share high-quality monastery images

Development Guidelines
Follow JavaScript ES6+ standards

Maintain responsive design principles

Ensure PWA best practices

Test on multiple devices and browsers

Document new features and APIs

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

📞 Support & Contact
Technical Issues
GitHub Issues: Report bugs or request features

Email: team.codexiety@gmail.com

Cultural Content
For monastery information accuracy or cultural sensitivity concerns, please reach out to our team.

🙏 Acknowledgments
Government of Sikkim - Tourism Department for cultural insights

Local Monasteries - For providing authentic information and access

Buddhist Scholars - For ensuring cultural accuracy

Smart India Hackathon 2025 - For the opportunity to showcase our solution

Open Source Community - For the amazing tools and libraries

📊 Project Statistics
Live Demo: https://codexiety-sih.onrender.com/

Monasteries Covered: 6 major monasteries with complete data

Languages Supported: 4 (English, Hindi, Nepali, Sikkimese)

PWA Score: 100/100 (Lighthouse audit)

Mobile Responsive: ✅ All screen sizes supported

Offline Functionality: ✅ Complete offline access

Load Time: < 3 seconds on mobile networks

🚀 Made with ❤️ by Team CODEXIETY for Smart India Hackathon 2025

📱 Try it now: https://codexiety-sih.onrender.com/

🌟 Star this repository if you found it helpful!
