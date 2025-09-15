// API Integration for CODEXIETY SIH 2025
class MonasteryAPI {
    constructor() {
        this.baseURL = 'http://localhost:5000/api';
        this.token = localStorage.getItem('auth_token');
    }

    // Helper method for API calls
    async makeRequest(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };

        if (this.token) {
            config.headers.Authorization = `Bearer ${this.token}`;
        }

        try {
            const response = await fetch(url, config);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // Auth methods
    async register(userData) {
        return this.makeRequest('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    }

    async login(credentials) {
        const result = await this.makeRequest('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        });
        
        if (result.success && result.data.token) {
            this.token = result.data.token;
            localStorage.setItem('auth_token', this.token);
        }
        
        return result;
    }

    logout() {
        this.token = null;
        localStorage.removeItem('auth_token');
    }

    // Monastery methods
    async getAllMonasteries(filters = {}) {
        const params = new URLSearchParams(filters).toString();
        const endpoint = params ? `/monasteries?${params}` : '/monasteries';
        return this.makeRequest(endpoint);
    }

    async getMonastery(id) {
        return this.makeRequest(`/monasteries/${id}`);
    }

    async getMonasteryCoordinates() {
        return this.makeRequest('/monasteries/map/coordinates');
    }

    // Events methods
    async getEvents() {
        return this.makeRequest('/events');
    }

    // Health check
    async healthCheck() {
        return this.makeRequest('/health');
    }
}

// Create global API instance
window.monasteryAPI = new MonasteryAPI();

// Example usage functions for your existing frontend
async function loadMonasteries() {
    try {
        const result = await monasteryAPI.getAllMonasteries();
        if (result.success) {
            console.log('Loaded monasteries:', result.data);
            return result.data;
        }
    } catch (error) {
        console.error('Failed to load monasteries:', error);
    }
}

async function loadFeaturedMonasteries() {
    try {
        const result = await monasteryAPI.getAllMonasteries({ featured: 'true' });
        if (result.success) {
            console.log('Loaded featured monasteries:', result.data);
            return result.data;
        }
    } catch (error) {
        console.error('Failed to load featured monasteries:', error);
    }
}

// Authentication functions
async function loginUser(email, password) {
    try {
        const result = await monasteryAPI.login({ email, password });
        if (result.success) {
            console.log('Login successful:', result.data.user);
            return result.data;
        } else {
            console.error('Login failed:', result.error);
        }
    } catch (error) {
        console.error('Login error:', error);
    }
}

console.log('✅ Monastery API loaded and ready!');
