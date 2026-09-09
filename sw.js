/* Talos service worker - offline play + install support */
const CACHE = "talos-v1.2.1";
const ASSETS = [
  "index.html",
  "manifest.webmanifest",
  "icons/icon-16.png",
  "icons/icon-32.png",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "audio/Menu Loop.mp3",
  "audio/Gameplay Loop.mp3",
  "audio/Capture.mp3",
  "audio/pop A.mp3",
  "audio/pop B.mp3",
  "audio/pop C.mp3",
  "audio/pop D.mp3",
  "audio/pop E.mp3",
  "audio/pop F.mp3",
  "audio/pop G.mp3"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      /* add individually: one missing file must not abort the whole install */
      .then(c => Promise.all(ASSETS.map(a => c.add(a).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  /* the page itself: network-first so deploys reach players without an
     sw.js bump; cached copy is the offline fallback */
  if (e.request.mode === "navigate" || e.request.destination === "document") {
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
    return;
  }

  /* everything else: cache-first */
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit =>
      hit ||
      fetch(e.request).then(res => {
        if (res.ok && e.request.destination !== "") {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
    )
  );
});
