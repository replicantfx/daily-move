// Offline support for Daily Move.
// Serves everything from the cache first so the app opens instantly and works offline,
// then refreshes the cache in the background so the next launch picks up new versions.
// Bump VERSION when the list of files below changes.
const VERSION = "v2";
const CACHE = `daily-move-${VERSION}`;
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "fonts/fonts.css",
  "fonts/shippori-500.woff2",
  "fonts/shippori-700.woff2",
  "fonts/shippori-800.woff2",
  "fonts/zenkaku-400.woff2",
  "fonts/zenkaku-500.woff2",
  "fonts/zenkaku-700.woff2",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(FILES.map((f) => new Request(f, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("daily-move-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const key = req.mode === "navigate" ? "./" : req;
      const cached = await cache.match(key, { ignoreSearch: true });
      // Fetch by URL: a navigate-mode Request can't be re-fetched with extra options.
      const refresh = fetch(req.url, { cache: "no-cache" })
        .then((res) => {
          if (res.ok) cache.put(key, res.clone());
          return res;
        })
        .catch(() => cached || Response.error());
      if (cached) {
        event.waitUntil(refresh);
        return cached;
      }
      return refresh;
    })
  );
});
