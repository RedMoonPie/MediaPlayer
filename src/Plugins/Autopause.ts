import MediaPlayer from "../assets/MediaPlayer";
//Plugin Autopause
class AutoPause {
  private threshold:number;
  player: MediaPlayer
  constructor(){
    //cuando pasa el 25% de la pagina se activa el handleintersection 
    this.threshold = 0.25 ;
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }
  //metodo run que recibe un mediaplayer
  run(player:MediaPlayer) {
    this.player = player
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold ,
    });
    observer.observe(player.media);

    //event visibility change

    document.addEventListener("visibilitychange", this.handleVisibilityChange)

  }

  private handleIntersection(entries:IntersectionObserverEntry[]) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold

    if(isVisible){
      this.player.play()
    }else{
      this.player.pause()
    }
    console.log(entries)
  }
 private handleVisibilityChange(){
    const isVisible = document.visibilityState === "visible";
    (isVisible) ? this.player.play() : this.player.pause() ;
  }

}

export default AutoPause;
