// Simple service worker - just copy paste this
const CACHE_NAME = 'monastery360-v1';

// When app installs, save these files
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll([
                '/',
                '/monastery.html',
                '/css/styles1.css',
                '/js/monastery-data.js',
                '/images/rumtek.jpg',
                '/images/dubdi.jpeg'
            ]);
        })
    );
});

// When someone visits your app, show saved files if no internet
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
