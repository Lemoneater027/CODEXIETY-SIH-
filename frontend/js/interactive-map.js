// Monastery360 - Interactive Map System
// This creates an interactive map with all monastery locations

class InteractiveMapSystem {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.map = null;
        this.markers = [];
        this.infoWindows = [];
        this.currentLanguage = 'english';
        
        this.initializeMap();
    }
    
    initializeMap() {
        // Initialize Google Maps
        const sikkimCenter = { lat: 27.5330, lng: 88.5122 };
        
        this.map = new google.maps.Map(this.container, {
            zoom: 10,
            center: sikkimCenter,
            mapTypeId: 'satellite',
            styles: this.getCustomMapStyle(),
            controls: {
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                streetViewControl: false,
                rotateControl: true,
                fullscreenControl: true
            }
        });
        
        this.loadMonasteryMarkers();
        this.addMapControls();
        this.addTravelRoutes();
    }
    
    loadMonasteryMarkers() {
        const monasteries = MonasteryAPI.getAllMonasteries();
        
        monasteries.forEach(monastery => {
            this.addMonasteryMarker(monastery);
        });
        
        // Fit map to show all markers
        this.fitMapToMarkers();
    }
    
    addMonasteryMarker(monastery) {
        const position = {
            lat: monastery.location.latitude,
            lng: monastery.location.longitude
        };
        
        // Create custom marker icon
        const markerIcon = {
            url: '/images/ui/monastery-marker.png',
            scaledSize: new google.maps.Size(40, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(20, 40)
        };
        
        const marker = new google.maps.Marker({
            position: position,
            map: this.map,
            title: monastery.name[this.currentLanguage],
            icon: markerIcon,
            animation: google.maps.Animation.DROP
        });
        
        // Create info window
        const infoWindow = new google.maps.InfoWindow({
            content: this.createInfoWindowContent(monastery)
        });
        
        // Add click event
        marker.addListener('click', () => {
            // Close all other info windows
            this.infoWindows.forEach(iw => iw.close());
            
            infoWindow.open(this.map, marker);
            this.showMonasteryDetails(monastery.id);
        });
        
        this.markers.push({ marker, monastery, infoWindow });
        this.infoWindows.push(infoWindow);
    }
    
    createInfoWindowContent(monastery) {
        return `
            <div class="map-info-window">
                <img src="${monastery.images.main}" alt="${monastery.name[this.currentLanguage]}" class="info-image">
                <h3>${monastery.name[this.currentLanguage]}</h3>
                <p class="info-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${monastery.location.district}, ${monastery.location.altitude}
                </p>
                <p class="info-description">${monastery.description[this.currentLanguage].substring(0, 100)}...</p>
                <div class="info-actions">
                    <button class="info-btn virtual-tour-btn" onclick="startVirtualTour('${monastery.id}')">
                        <i class="fas fa-vr-cardboard"></i> Virtual Tour
                    </button>
                    <button class="info-btn directions-btn" onclick="getDirections(${monastery.location.latitude}, ${monastery.location.longitude})">
                        <i class="fas fa-directions"></i> Directions
                    </button>
                    <button class="info-btn details-btn" onclick="showMonasteryDetails('${monastery.id}')">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                </div>
            </div>
        `;
    }
    
    showMonasteryDetails(monasteryId) {
        const monastery = MonasteryAPI.getMonasteryById(monasteryId);
        if (!monastery) return;
        
        const detailsPanel = document.getElementById('monastery-details-panel');
        if (!detailsPanel) {
            this.createDetailsPanel();
        }
        
        this.updateDetailsPanel(monastery);
    }
    
    createDetailsPanel() {
        const panel = document.createElement('div');
        panel.id = 'monastery-details-panel';
        panel.className = 'map-details-panel';
        panel.innerHTML = `
            <div class="details-header">
                <h2 id="details-title"></h2>
                <button class="close-panel" onclick="closeDetailsPanel()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="details-content" id="details-content">
                <!-- Content loaded dynamically -->
            </div>
        `;
        
        document.body.appendChild(panel);
    }
    
    updateDetailsPanel(monastery) {
        document.getElementById('details-title').textContent = monastery.name[this.currentLanguage];
        
        const content = document.getElementById('details-content');
        content.innerHTML = `
            <div class="details-image">
                <img src="${monastery.images.main}" alt="${monastery.name[this.currentLanguage]}">
            </div>
            
            <div class="details-section">
                <h3><i class="fas fa-info-circle"></i> About</h3>
                <p>${monastery.description[this.currentLanguage]}</p>
            </div>
            
            <div class="details-section">
                <h3><i class="fas fa-history"></i> History</h3>
                <div class="history-grid">
                    <div class="history-item">
                        <strong>Founded:</strong> ${monastery.history.founded}
                    </div>
                    <div class="history-item">
                        <strong>Founder:</strong> ${monastery.history.founder}
                    </div>
                    <div class="history-item">
                        <strong>Lineage:</strong> ${monastery.history.lineage}
                    </div>
                </div>
            </div>
            
            <div class="details-section">
                <h3><i class="fas fa-clock"></i> Visiting Information</h3>
                <div class="visiting-grid">
                    <div class="visiting-item">
                        <i class="fas fa-clock"></i>
                        <span>${monastery.visitingInfo.openingHours}</span>
                    </div>
                    <div class="visiting-item">
                        <i class="fas fa-ticket-alt"></i>
                        <span>${monastery.visitingInfo.entryFee}</span>
                    </div>
                    <div class="visiting-item">
                        <i class="fas fa-calendar"></i>
                        <span>${monastery.visitingInfo.bestTimeToVisit}</span>
                    </div>
                </div>
            </div>
            
            <div class="details-section">
                <h3><i class="fas fa-route"></i> How to Reach</h3>
                <div class="travel-info">
                    <p><strong>Distance from Gangtok:</strong> ${monastery.location.distanceFromGangtok}</p>
                    <p><strong>Transportation:</strong> ${monastery.travelInfo.transportation.join(', ')}</p>
                    <p><strong>Travel Time:</strong> ${monastery.travelInfo.travelTime}</p>
                </div>
            </div>
            
            <div class="details-actions">
                <button class="action-btn primary" onclick="startVirtualTour('${monastery.id}')">
                    <i class="fas fa-vr-cardboard"></i> Start Virtual Tour
                </button>
                <button class="action-btn secondary" onclick="getDirections(${monastery.location.latitude}, ${monastery.location.longitude})">
                    <i class="fas fa-directions"></i> Get Directions
                </button>
                <button class="action-btn secondary" onclick="playAudioGuide('${monastery.id}')">
                    <i class="fas fa-headphones"></i> Audio Guide
                </button>
            </div>
        `;
        
        document.getElementById('monastery-details-panel').classList.add('active');
    }
    
    addTravelRoutes() {
        const routes = MonasteryData.travelRoutes;
        
        routes.forEach(route => {
            this.addTravelRoute(route);
        });
    }
    
    addTravelRoute(routeData) {
        const path = routeData.route.map(point => ({
            lat: point.lat,
            lng: point.lng
        }));
        
        const routePath = new google.maps.Polyline({
            path: path,
            geodesic: true,
            strokeColor: '#FF6B35',
            strokeOpacity: 1.0,
            strokeWeight: 3
        });
        
        routePath.setMap(this.map);
        
        // Add route info window
        const routeInfoWindow = new google.maps.InfoWindow({
            content: `
                <div class="route-info">
                    <h4>${routeData.name}</h4>
                    <p><strong>Distance:</strong> ${routeData.distance}</p>
                    <p><strong>Duration:</strong> ${routeData.duration}</p>
                    <p><strong>Cost:</strong> ${routeData.cost.taxi}</p>
                </div>
            `
        });
        
        routePath.addListener('click', (event) => {
            routeInfoWindow.setPosition(event.latLng);
            routeInfoWindow.open(this.map);
        });
    }
    
    addMapControls() {
        // Create custom controls
        const controlDiv = document.createElement('div');
        controlDiv.className = 'map-custom-controls';
        controlDiv.innerHTML = `
            <div class="map-control-group">
                <button class="map-control-btn" onclick="mapSystem.filterByDistrict('all')" title="Show All">
                    <i class="fas fa-globe"></i>
                </button>
                <button class="map-control-btn" onclick="mapSystem.filterByDistrict('East Sikkim')" title="East Sikkim">
                    <i class="fas fa-compass"></i>
                </button>
                <button class="map-control-btn" onclick="mapSystem.filterByDistrict('West Sikkim')" title="West Sikkim">
                    <i class="fas fa-mountain"></i>
                </button>
                <button class="map-control-btn" onclick="mapSystem.toggleSatellite()" title="Toggle View">
                    <i class="fas fa-satellite"></i>
                </button>
                <button class="map-control-btn" onclick="mapSystem.findNearby()" title="Find Nearby">
                    <i class="fas fa-location-arrow"></i>
                </button>
            </div>
        `;
        
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlDiv);
    }
    
    filterByDistrict(district) {
        this.markers.forEach(({ marker, monastery }) => {
            if (district === 'all' || monastery.location.district === district) {
                marker.setMap(this.map);
            } else {
                marker.setMap(null);
            }
        });
    }
    
    toggleSatellite() {
        const currentType = this.map.getMapTypeId();
        this.map.setMapTypeId(currentType === 'satellite' ? 'roadmap' : 'satellite');
    }
    
    findNearby() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                this.showNearbyMonasteries(userLocation);
            });
        } else {
            alert('Geolocation not supported by this browser.');
        }
    }
    
    showNearbyMonasteries(userLocation) {
        // Add user location marker
        const userMarker = new google.maps.Marker({
            position: userLocation,
            map: this.map,
            title: 'Your Location',
            icon: {
                url: '/images/ui/user-location-marker.png',
                scaledSize: new google.maps.Size(30, 30)
            }
        });
        
        // Calculate distances and show nearest monasteries
        const nearbyMonasteries = this.calculateNearestMonasteries(userLocation, 3);
        this.showNearbyResults(nearbyMonasteries);
    }
    
    calculateNearestMonasteries(userLocation, count = 5) {
        const monasteries = MonasteryAPI.getAllMonasteries();
        
        return monasteries
            .map(monastery => ({
                ...monastery,
                distance: this.calculateDistance(
                    userLocation.lat, userLocation.lng,
                    monastery.location.latitude, monastery.location.longitude
                )
            }))
            .sort((a, b) => a.distance - b.distance)
            .slice(0, count);
    }
    
    calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371; // Earth's radius in kilometers
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLng = (lng2 - lng1) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLng/2) * Math.sin(dLng/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }
    
    showNearbyResults(nearbyMonasteries) {
        const resultsPanel = document.createElement('div');
        resultsPanel.className = 'nearby-results-panel';
        resultsPanel.innerHTML = `
            <div class="results-header">
                <h3>Nearby Monasteries</h3>
                <button onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="results-list">
                ${nearbyMonasteries.map(monastery => `
                    <div class="nearby-item" onclick="mapSystem.focusOnMonastery('${monastery.id}')">
                        <img src="${monastery.images.main}" alt="${monastery.name.english}">
                        <div class="nearby-info">
                            <h4>${monastery.name.english}</h4>
                            <p>${monastery.distance.toFixed(1)} km away</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.body.appendChild(resultsPanel);
    }
    
    focusOnMonastery(monasteryId) {
        const markerData = this.markers.find(m => m.monastery.id === monasteryId);
        if (markerData) {
            this.map.setCenter(markerData.marker.getPosition());
            this.map.setZoom(15);
            google.maps.event.trigger(markerData.marker, 'click');
        }
    }
    
    fitMapToMarkers() {
        const bounds = new google.maps.LatLngBounds();
        this.markers.forEach(({ marker }) => {
            bounds.extend(marker.getPosition());
        });
        this.map.fitBounds(bounds);
    }
    
    getCustomMapStyle() {
        // Custom map styling for monastery theme
        return [
            {
                featureType: 'all',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#8B4513' }]
            },
            {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [{ color: '#F5DEB3' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#D2B48C' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#87CEEB' }]
            }
        ];
    }
}

// Global functions for map interactions
function startVirtualTour(monasteryId) {
    window.open(`virtual-tour.html?monastery=${monasteryId}`, '_blank');
}

function getDirections(lat, lng) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
}

function playAudioGuide(monasteryId) {
    window.open(`audio-guide.html?monastery=${monasteryId}`, '_blank');
}

function closeDetailsPanel() {
    const panel = document.getElementById('monastery-details-panel');
    if (panel) {
        panel.classList.remove('active');
    }
}

// Initialize map when Google Maps API is loaded
function initMap() {
    if (document.getElementById('map-container')) {
        window.mapSystem = new InteractiveMapSystem('map-container');
    }
}