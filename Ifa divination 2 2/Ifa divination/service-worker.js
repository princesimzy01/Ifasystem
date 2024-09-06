const CACHE_NAME = 'ifa-divination-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    '/manifes.json'
            
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(respond => {
                return response || fetch(event.request);
            })
    );
});