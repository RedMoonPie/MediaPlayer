
        import MediaPlayer from './MediaPlayer'
        import AutoPlay from '../Plugins/Autoplay';
        import AutoPause from '../Plugins/Autopause';
        const video = document.querySelector("video")
        const player = new MediaPlayer({el: video,plugins: [
                new AutoPlay(), new AutoPause()
        ] }); 

        const button:HTMLElement = document.querySelector("button")
        console.log(button)
        button.onclick = () => (player.p == false)? player.play() :player.pause()

        const buttonMute:HTMLElement = document.querySelector('#muteButton')
       
        buttonMute.onclick = () => (player.media.muted == true ) ? player.media.muted = false : player.media.muted = true
        

        if('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').catch(error => {
                        console.log(error.message)
                })
        }
