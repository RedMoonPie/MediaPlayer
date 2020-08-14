const VERSION = "v1"

self.addEventListener('install', event => {
    //pre-cache
    event.waitUntil(precache());
})

//cuando ocurra una peticion a ver si esta en el cache
self.addEventListener('fetch',event => {
    const request = event.request;
    //get
    if(request.method != "GET"){
        return;
    }

    //buscar en cache
    event.respondWith(cachedResponse (request))
    //actualizar el cache
    event.waitUntil(updateCache(request))


})






async function precache(){

    const cache = await caches.open(VERSION)
    return cache.addAll ([
        '/',
        '/src/index.html',
        '/src/assets/index.js',
        '/src/assets/MediaPlayer.js',
        '/src/plugins/AutoPlay.js',
        '/src/plugins/AutoPause.js',
        '/src/assets/index.css',
        '/src/assets/BigBuckBunny.mp4',
    ])
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)

}
async function updateCache(request){
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response)
}