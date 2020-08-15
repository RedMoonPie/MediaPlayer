//Media Player class 
class MediaPlayer {
    //elemento media html
    media: HTMLMediaElement;
    //array de plugins 
    plugins: Array<any>;
    //variable booleanda botones play pause
    container: HTMLElement;

    p:Boolean
    //constructor que recibe la config del media player
    constructor(config) {
        
        //media player
        this.media = config.el;
        //plugins
        this.plugins = config.plugins || [];
        //inicializar los plugins
        this.initPlayer();
        this.initPlugins();
        //booleano en true debido al autoplay
        this.p = true
    }
    initPlayer(){
        this.container = document.createElement('div')

        this.container.style.position = 'relative '; 

        this.media.parentNode.insertBefore(this.container,this.media);
        this.container.appendChild(this.media);
    }
    private initPlugins(){
        //cada plugin en el array plugins se inicializa 
        this.plugins.forEach(plugin => {
            plugin.run(this);
          });
    }
    //el metodo play del mediaplayer
    play() {
        this.p = true
        this.media.play()

    }
    //metodo pause del media player
    pause() {
        this.media.pause()
        this.p = false
    }
    //Metodo mute del media player
    mute(){
        this.media.muted = true ;
    }
}
//Exportar el MediaPLayer
export default MediaPlayer;