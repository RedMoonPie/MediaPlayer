class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    p:Boolean
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || [];
        this.initPlugins();

        this.p = true
    }
    play() {
        this.p = true
        console.log(this.p)
        this.media.play()

    }
    private initPlugins(){

        const player = {
            pause: () => this.pause(),
            play: () => this.play(),

            media: this.media,
            get muted(){
                return this.media.muted;
            },
            set muted(value){
                    this.media.muted = value;
              
            },
        };


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