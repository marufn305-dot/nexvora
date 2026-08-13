const CACHE_NAME = "nexvora-v1";

const FILES_TO_CACHE = [
  "index.html",
  "products.html",
  "product details html",
  "cart.html",
  "checkout.html",
  "orders.html",
  "add-product.html",
  "my-products.html",
  "seller.html",
  "seller-dashbord.html",
  "seller-orders.html",
  "settings.html",
  "loging.html",
  "ragister.html",
  "seller-loging.html",
  "seller-ragister.html",
  "auth.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE).catch(() => {});
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});