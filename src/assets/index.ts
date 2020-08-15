
        import MediaPlayer from './MediaPlayer'
        import AutoPlay from '../Plugins/Autoplay';
        import AutoPause from '../Plugins/Autopause';
        import Ads from '../Plugins/Ads/';
        //seleccionamos el htmlElement video
        const video = document.querySelector("video")
        //se crea una nueva instancia del media player
        const player = new MediaPlayer({
                //le pasamos el elemento html
                el: video,
                //Le pasamos los plugins
                plugins: [
                new AutoPlay(), new AutoPause(),new Ads()], 
        }); 
        //seleccionamos el boton play del html
        const button:HTMLElement = document.querySelector("button")
        button.onclick = () => (player.p == false)? player.play() :player.pause()

        //seleccionamos el boton mute del html
        const buttonMute:HTMLElement = document.querySelector('#muteButton')
        buttonMute.onclick = () => (player.media.muted == true ) ? player.media.muted = false : player.media.muted = true
        
        //service worker para almacenar en cache los archivos 
        if('serviceWorker' in navigator) {
                navigator.serviceWorker.register('sw.js').catch(error => {
                        console.log(error.message)
                })
        }
