'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5f4de7154954d880fd193bdd2b1fcc80",
"assets/AssetManifest.bin.json": "5d905ab3a543c1753f14e89e5b38ea9e",
"assets/AssetManifest.json": "52939631b1247074b5ba170e81e86fa9",
"assets/assets/bnerlogo.png": "775298de54451b1e3607973d39069b03",
"assets/assets/crdbnr.jpg": "8aa9b3976c0ba9193b3ff27f07c03c14",
"assets/assets/fst.jpeg": "782089fe247ee7ae83463aa5c84fb2ad",
"assets/assets/hm.jpg": "d4b04635a13c4eff2f78d7eaa961cf42",
"assets/assets/hmgok.png": "f59545e83da304a235b14db3ea36e3ce",
"assets/assets/images/footer.jpg": "b6762d4530612f890a21d5539b3f5242",
"assets/assets/images/footer2.jpg": "295b7b34ae6f2f156b3247324df7807f",
"assets/assets/images/footerm.jpg": "553c750736366f2d827b9c5633f2acda",
"assets/assets/images/home.jpg": "811da5c652f6cec4ce9c4a6a194b96cc",
"assets/assets/images/logo.png": "52751df8e14370e8283834993deba197",
"assets/assets/images/nav.jpg": "3cd3b26d06432d595b4f11a62faa54b3",
"assets/assets/images/p1.jpg": "c44bfdb07bad1fcc6dd92f9620778812",
"assets/assets/images/pl2.jpg": "e055b33a96ae8426d81498b97e261182",
"assets/assets/images/pl3.jpg": "502d7966db4d6a576b843ac9b2361b23",
"assets/assets/images/pl4.jpg": "f0cea5647be92d38a11ec26c296edd08",
"assets/assets/images/saft.jpg": "ba5f70380d0473692729e9f77e739308",
"assets/assets/images/sl0.png": "4df3568343e70d0f3f8c805954968f42",
"assets/assets/images/sl1.jpg": "90d8364f55dfa03058f0eaebd12f9c6e",
"assets/assets/images/sl2.jpg": "cea80eac5b0c8051b32c590d5318f005",
"assets/assets/loader.gif": "750fc7f7c6391b7ec37212f9ae002875",
"assets/assets/logo.png": "8edb9f06d5049e67f416654ea5f8fa9a",
"assets/assets/logokm.png": "52751df8e14370e8283834993deba197",
"assets/assets/logon.png": "fb131b65ec7fb95115e1903358427601",
"assets/assets/lst.jpeg": "d0e31af99629aaaf6257b1c941f4ea6e",
"assets/assets/pnding.json": "5c155ef537e313d0558565f560df4724",
"assets/assets/sbmenu.png": "52751df8e14370e8283834993deba197",
"assets/assets/snd.jpeg": "9e9c01aff7d25de1cb7d9e0f86cc2c00",
"assets/assets/sucessful.json": "77803a6057dd4762500fa8ba14782159",
"assets/assets/trd.jpeg": "0d2ddf01d8ebe5b3f94f7fe47c698c27",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "19837a4181b4d2d07de85adb69a43824",
"assets/NOTICES": "919bbc6e5b5bd12b6fe84e9f4c191434",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "f524a4a5f35b8585ac60e8ef82971950",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "9c271b551ad364be39ca00ecfc56e11e",
"icons/Icon-192.png": "f524a4a5f35b8585ac60e8ef82971950",
"icons/Icon-512.png": "f524a4a5f35b8585ac60e8ef82971950",
"icons/Icon-maskable-192.png": "f524a4a5f35b8585ac60e8ef82971950",
"icons/Icon-maskable-512.png": "f524a4a5f35b8585ac60e8ef82971950",
"index.html": "32131477add34ca8b744caeda09d0bb8",
"/": "32131477add34ca8b744caeda09d0bb8",
"logo.png": "eb70fe6f87911addbc2486b18f376a8e",
"main.dart.js": "9c30240c3230fde8c21adb9b9f885c3c",
"manifest.json": "485025f3c74f75d11b80166c9f3be16d",
"version.json": "7c312459db52d77b03c4392ded5e0f16"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
