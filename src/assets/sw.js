//Una constante con la version del cache
const VERSION = "v1"
//
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
    //Abrir el cache en la version 
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

//La respuesta cacheada 
async function cachedResponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    //Si se puede obtener del cache o sino un fetch para traer la ingo
    return response || fetch(request)

}
//Actualizacion del cache
async function updateCache(request){
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response)
}