
        import MediaPlayer from './MediaPlayer.js'
        import AutoPlay from '../Plugins/Autoplay.js';

        const video = document.querySelector("video")
        const player = new MediaPlayer({el: video,plugins: [
                new AutoPlay()
        ] });

        const button = document.querySelector("button")

        button.onclick = () => (player.p == false)? player.play() :player.pause()

       
       
        
        