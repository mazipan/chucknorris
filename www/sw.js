(global => {
  'use strict';

  var versionCache = '-chucknorris-20170726-11-31'

  // Load the sw-tookbox library.
  importScripts('/chucknorris/sw/sw-toolbox.js');

  // Turn on debug logging, visible in the Developer Tools' console.
  global.toolbox.options.debug = true;

  toolbox.router.get('/chucknorris/sw/*', global.toolbox.cacheFirst, {
      cache: {
          name: 'serviceWorkerCacheVue' + versionCache,
          maxEntries: 200
      }
  });
  toolbox.router.get('/chucknorris/**/*.{css}', global.toolbox.cacheFirst, {
    cache: {
      name: 'staticCssCacheVue' + versionCache,
      maxEntries: 200
    }
  });
  toolbox.router.get('/chucknorris/**/*.{js}', global.toolbox.cacheFirst, {
    cache: {
      name: 'staticJsCacheVue' + versionCache,
      maxEntries: 200
    }
  });  
  toolbox.router.get(/\.(?:png|gif|jpg)$/, global.toolbox.cacheFirst, {
    cache: {
      name: 'imageCacheVue' + versionCache,
      maxEntries: 200
    }
  });
  toolbox.router.get('/chucknorris/(.*)', toolbox.cacheFirst, {
    cache: {
      name: 'staticOtherVue' + versionCache,
      maxEntries: 200
    }
  });
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'googleapis',
      maxEntries: 20,
    },
    origin: /\.googleapis\.com$/
  });  
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'cloudflare',
      maxEntries: 20,
    },
    origin: /\.cloudflare\.com$/
  });  
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'chucknorris-assets',
      maxEntries: 200,
    },
    origin: /\.assets\.chucknorris\.host$/
  });
  toolbox.router.get('/jokes/random?category=(.*)', global.toolbox.networkFirst, {
    cache: {
      name: 'chucknorris-api',
      maxEntries: 500,
      maxAgeSeconds: 518400,
    },
    origin: /\.api\.chucknorris\.io$/
  });
  toolbox.router.get('/jokes/random(.*)', global.toolbox.networkFirst, {
    cache: {
      name: 'chucknorris-api',
      maxEntries: 500,
      maxAgeSeconds: 518400,
    },
    origin: /\.api\.chucknorris\.io$/
  });
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'chucknorris-api',
      maxEntries: 200,
      maxAgeSeconds: 518400,
    },
    origin: /\.api\.chucknorris\.io$/
  });

  // Boilerplate to ensure our service worker takes control of the page as soon as possible.
  global.addEventListener('install', event => event.waitUntil(global.skipWaiting()));
  global.addEventListener('activate', event => event.waitUntil(global.clients.claim()));
})(self);
