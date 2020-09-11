'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d679036cc63a6661c1c6b14253e43291",
".git/config": "eac29df76a25be929bbffe91760237e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "6d5e4551445e75d7fd988ff94134c6ef",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b58b7bd077ae119c41dde95d33cd038",
".git/logs/refs/heads/master": "3b58b7bd077ae119c41dde95d33cd038",
".git/logs/refs/remotes/origin/master": "6336c4c926de005b7a7ebb24d9693950",
".git/objects/04/a39196c14cb623df9e98b8d9372398fb526787": "64e6c72fae0a320f3b8482c57120f2a9",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/26/d88600900927f2c8467f3d8fab61607f2879c3": "c4b39a2ec2a2a933fe21f90f7110fff2",
".git/objects/35/2d63bf52336f32f5c350c2bd74b519d6e668c8": "81f26e6fa6d40a3eddfcb39e067fce26",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/429b1f25d802921ba82625041807e4158743bd": "44c5d0344dc934d9eb304505d87b7581",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/56/55f9df2a3e899d0d7891ea9e751ef837911838": "51fbd99ae555da31eed802dba4fbd382",
".git/objects/5b/28a63aad41dce833cda24f6ad808371db04fab": "51b26cfa0d09adbfc60acec21897ecd2",
".git/objects/5b/a60e09f543ff1a8b48026b37e5416bdc8fa68b": "cdd1af3ab431b965e82410beaee585e5",
".git/objects/7c/fddb5a9a4665649c67e733ca6805f861225c1e": "98426ec953127429115b11613e4f79cb",
".git/objects/7d/50d55973c2e10c244aabb73e363b80d875a5fe": "dfd863fdcdade69102e0fdfb92cbea40",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8b/80bec1deba9731a5f39eb8fdcba6febd1899ae": "dcca01119d48fb2ebcd52925b3a69467",
".git/objects/8d/df76b46bd6dfd0ebb881b42c872fd9e01b0996": "99fd889bcccc6c239c60c650bc062ac5",
".git/objects/93/4721dfe12e2cceb1b0c928efbc6a85d2113439": "d9e448651dbb06150a622d7ff5175796",
".git/objects/9a/03269ec5d36eeadf3599b589bb2c063b40c55a": "f1777b052f68f0c5cd88e7155f080937",
".git/objects/9f/1d7bb59c0cc78fb8c391c97e22c7dd61eb6c4f": "fd6431c228b1c7b4c3b6732cdf87ffbb",
".git/objects/a0/8db382b8067f22e6c8bd85ab20e772e618ba5f": "10129d62ad0a0d3f230185948efa98e8",
".git/objects/a9/978e19530c50482791f4afaff81f2f4e34317f": "daa5f72355f1a357dd86c78d008da7c9",
".git/objects/ae/066e68e6195c09569890115e22cb0ddf8900d8": "8bb30f51e6cea8f9fd3c7011237006de",
".git/objects/ae/77f699eb8928bb3589ec69c2393918b70020e0": "b77a034a9ba6ae03348ba85a90f5ec5d",
".git/objects/b0/709070f272df739147fced8eec45dfdbad5f02": "f711404279db7fca6e4e7ca56a3bb8d9",
".git/objects/c6/7a0f52d67a25d604d1164b46ee2fb9fef3a931": "3e593eeb362a3e17e224d6d5f251b5f0",
".git/objects/d5/d7d3823dbe928be7f9d6b44efb95fb86b2142c": "1b10ccbd13d5ff333661e87fdcfa1dd1",
".git/objects/da/58130cc40b54a865e2869fcd87173476cae38c": "0bd3300b6f15b695a830240dc62f13be",
".git/objects/db/b028f6d5b104743c91aeda959d12a5ec71542c": "deddc101dcd481536e9f0b13d486be47",
".git/objects/dc/4eebb3af8c6f6b41ab19a22d662e35e1a3e4d2": "52df13607a5f650be13d924e8c57f229",
".git/objects/dc/ba658c2705796312841a69442b2767a46ece9c": "dedca202805a2fb129a046021eff5609",
".git/objects/de/11bb7673383209e6972cd8fe60d34d448f9b85": "482ceb353d329ab936a21c2ed1b5d330",
".git/objects/e6/c7d13d7e85208b5a4043260960e20b25432bc3": "5e6f30c6b468fbfdcd46a803f1d82b5d",
".git/objects/f5/4fb605b152dac2e3982b95f53c8765e968ed60": "318e1abdf15f5e388242d5527105cc9f",
".git/refs/heads/master": "9c199532674969958f0db539cf35c21d",
".git/refs/remotes/origin/master": "9c199532674969958f0db539cf35c21d",
"assets/AssetManifest.json": "92313968429aaf1562f3b06453908678",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/images/Alert.png": "e5f6a6f1a756538228e4d7af37fd93b1",
"assets/images/gw2background.jpg": "6a59ec34724c330f70df27a7754d5374",
"assets/images/WorkNotebook.jpg": "09ce556f613bfe76d06ce3f23011c56a",
"assets/NOTICES": "976cf786e0b1b37ae95bbf9ed25797b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/translations/en.json": "7b031ebd10050ccdb445355e91e08fcb",
"assets/translations/es.json": "bd5af4b449bd5312e1cd832c065dbbc1",
"assets/vectors/AxzetLogo.svg": "8995d83c72aa7e8b0d12817abadca069",
"assets/vectors/AxzetLogoMonocromatic.svg": "f998d170810aa57247412cd03b627598",
"favicon.png": "c8d1aaed4d3cefd54156183ce49ff6a8",
"icons/Icon-192.png": "ccda86a65dedb85e3d7a9d85ca6066a3",
"icons/Icon-512.png": "1b6c12a0297eab730abe325ed096898b",
"index.html": "429de86208ef0cba19db89300a186c73",
"/": "429de86208ef0cba19db89300a186c73",
"main.dart.js": "f50e0c25d6fa1f49291b35f15fe42d36",
"manifest.json": "2204b63dfea616383b67ddb086d476f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
