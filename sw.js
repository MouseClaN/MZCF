const cacheName = 'mouse-cache-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// Установка и кэширование
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Работа в оффлайне
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
