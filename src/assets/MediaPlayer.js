class MediaPlayer {
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || [];

        this._initPlugins();

        this.p = false
    }
    play() {
        this.p = true
        console.log(this.p)
        this.media.play()

    }
    _initPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    pause() {
        this.media.pause()
        this.p = false
    }
    mute(){
        this.media.muted = true ;
    }
}

export default MediaPlayer;