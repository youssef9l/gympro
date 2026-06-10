const CACHE = "gympro-v1";
const URLS = [
  "/GymPro_Salle_Mobile.html",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS)));
  self.skipWaiting();
});
self.addEventListener("activate", e => e.waitUntil(clients.claim()));
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => r))
  );
});
