// Main JavaScript for Monastery360
document.addEventListener('DOMContentLoaded', function() {
    console.log('Monastery360 loaded!');
    
    // Load featured monasteries on homepage
    if (document.getElementById('monasteries-carousel')) {
        loadFeaturedMonasteries();
    }
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize search functionality
    initializeSearch();
});

function initializeNavigation() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(async function(e) {
            const query = e.target.value.trim();
            if (query.length > 2) {
                const results = await api.searchMonasteries(query);
                displaySearchResults(results);
            }
        }, 300));
    }
}

// Helper function to debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Navigation functions
function startVirtualTour(monasteryId) {
    window.open(`virtual-tour.html?monastery=${monasteryId}`, '_blank');
}

function exploreMap() {
    window.location.href = 'map.html';
}

function playAudioGuide() {
    window.location.href = 'audio-guide.html';
}

function goToVirtualTour() {
    window.location.href = 'virtual-tour.html';
}

function goToMap() {
    window.location.href = 'map.html';
}

function goToArchives() {
    window.location.href = 'archives.html';
}

function goToAudioGuide() {
    window.location.href = 'audio-guide.html';
}

function goToCalendar() {
    window.location.href = 'cultural-calendar.html';
}

function goToTravel() {
    window.location.href = 'travel-guide.html';
}

function showMonasteryDetails(monasteryId) {
    window.location.href = `monasteries.html?id=${monasteryId}`;
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.monastery-card');

function nextSlide() {
    if (slides.length > 0) {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    }
}

function previousSlide() {
    if (slides.length > 0) {
        currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        updateCarousel();
    }
}

function updateCarousel() {
    const carousel = document.getElementById('monasteries-carousel');
    if (carousel) {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

// Language switching
function switchLanguage() {
    const language = document.getElementById('languageSelect').value;
    // Implement language switching logic
    console.log('Switching to language:', language);
}

// Mobile menu toggle
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}