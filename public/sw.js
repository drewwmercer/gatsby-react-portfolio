/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-046c7f0e50d4f0e966ac.js"
  },
  {
    "url": "framework-1b33dcd3199c0f928cc8.js"
  },
  {
    "url": "app-d6a8b29e2097e2bf8ae5.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "af03ffe5f12bf8cd83bfe05b8af4303f"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js"
  },
  {
    "url": "styles.247fca4f148cd4fc071f.css"
  },
  {
    "url": "styles-2d82ac8e3afc0c213061.js"
  },
  {
    "url": "aec7d165-1481f3b0f9c735c823a9.js"
  },
  {
    "url": "0873b9cb3f7a11ef410a2a97b1dc4c1618c88434-f50a621d363be5275fa4.js"
  },
  {
    "url": "c2aad20868020ccc6dc79584802d91cef97051ea-38142b328d7a7d1927c7.js"
  },
  {
    "url": "component---src-pages-index-tsx-18bc83099081d6baed74.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "53f423a56ca9e2f4adef7542414b5315"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "e1c9dda69119c0bc4e311d07de7b07e3"
  },
  {
    "url": "167bebcf5cff286a3126444a5b4e0f274654aaa7-dd44d6b99da5ef61ca6c.js"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-bcf020e817acc7d4664b.js"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "ef7c84843bb412337357f3f92766dbf9"
  },
  {
    "url": "component---src-templates-blog-post-tsx-422674d69293182744eb.js"
  },
  {
    "url": "page-data/post/hello-world/page-data.json",
    "revision": "72c253047369ebf04b62ab547bb09c19"
  },
  {
    "url": "page-data/post/hello-world-copy/page-data.json",
    "revision": "2ea5ae6e3fe1bf47230534b4011d618c"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-e3cacf641e5c2907b545.js"
  },
  {
    "url": "page-data/tag/raleigh-web-developer/page-data.json",
    "revision": "18b2e1467c65bf166ac26117aa56cbbd"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-c5dde65bab1f86695065.js"
  },
  {
    "url": "page-data/category/uncategorized/page-data.json",
    "revision": "bec14123528ab990b9fd73485a44466d"
  },
  {
    "url": "component---src-pages-about-tsx-d449023c88a98055bcba.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "9761962e6661aae76172ab7aa270625e"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3603bf5edb94d288949126638770428b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-d6a8b29e2097e2bf8ae5.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
