const CACHE_NAME = "kuroneko-timer-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./cat.png",
  "./favicon.png",
  "./manifest.json"
];

// インストール時にキャッシュ
self.addEventListener("install", (event) => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then((cache) => {

        console.log("🐈‍⬛ キャッシュ保存");

        return cache.addAll(urlsToCache);

      })

  );

});

// 有効化
self.addEventListener("activate", (event) => {

  console.log("🐈‍⬛ Service Worker有効");

});

// オフライン時はキャッシュを返す
self.addEventListener("fetch", (event) => {

  event.respondWith(

    caches.match(event.request)
      .then((response) => {

        // キャッシュがあれば使う
        if (response) {
          return response;
        }

        // なければネットから取得
        return fetch(event.request);

      })

  );

});
