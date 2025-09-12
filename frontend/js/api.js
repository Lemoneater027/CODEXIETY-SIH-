// Frontend API connection to backend
class MonasteryAPI {
    constructor() {
        this.baseURL = 'http://localhost:3000/api';
    }
    
    // Get all monasteries from backend
    async getAllMonasteries(filters = {}) {
        try {
            let url = `${this.baseURL}/monasteries`;
            const params = new URLSearchParams();
            
            if (filters.district) params.append('district', filters.district);
            if (filters.featured) params.append('featured', filters.featured);
            if (filters.limit) params.append('limit', filters.limit);
            
            if (params.toString()) {
                url += '?' + params.toString();
            }
            
            const response = await fetch(url);
            const data = await response.json();
            
            if (data.success) {
                return data.data;
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error('Error fetching monasteries:', error);
            return [];
        }
    }
    
    // Get specific monastery by ID
    async getMonasteryById(id) {
        try {
            const response = await fetch(`${this.baseURL}/monasteries/${id}`);
            const data = await response.json();
            
            if (data.success) {
                return data.data;
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error('Error fetching monastery:', error);
            return null;
        }
    }
    
    // Search monasteries
    async searchMonasteries(query) {
        try {
            const response = await fetch(`${this.baseURL}/monasteries/search/${encodeURIComponent(query)}`);
            const data = await response.json();
            
            if (data.success) {
                return data.data;
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error('Error searching monasteries:', error);
            return [];
        }
    }
    
    // Upload image
    async uploadImage(file) {
        try {
            const formData = new FormData();
            formData.append('image', file);
            
            const response = await fetch(`${this.baseURL}/upload/image`, {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                return data.imageUrl;
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        }
    }
}

// Create global API instance
const api = new MonasteryAPI();

// Example usage functions
async function loadFeaturedMonasteries() {
    const monasteries = await api.getAllMonasteries({ featured: 'true', limit: 6 });
    displayMonasteries(monasteries);
}

async function searchMonasteriesOnPage(query) {
    const results = await api.searchMonasteries(query);
    displaySearchResults(results);
}

function displayMonasteries(monasteries) {
    const container = document.getElementById('monasteries-carousel');
    if (!container) return;
    
    container.innerHTML = monasteries.map(monastery => `
        <div class="monastery-card">
            <img src="${monastery.images.main}" alt="${monastery.name.english}" class="monastery-image">
            <div class="monastery-info">
                <h3 class="monastery-name">${monastery.name.english}</h3>
                <p class="monastery-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${monastery.location.district}
                </p>
                <p class="monastery-description">${monastery.description.english.substring(0, 100)}...</p>
                <div class="monastery-actions">
                    <button class="monastery-btn btn-tour" onclick="startVirtualTour('${monastery.id}')">
                        <i class="fas fa-vr-cardboard"></i> Virtual Tour
                    </button>
                    <button class="monastery-btn btn-info" onclick="showMonasteryDetails('${monastery.id}')">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function displaySearchResults(results) {
    // Display search results on page
    console.log('Search results:', results);
}