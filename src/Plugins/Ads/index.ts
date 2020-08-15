import MediaPlayer from '../../assets/MediaPlayer'
//Importamos Ads, y Ad del archivo ads.ts
import Ads, {Ad} from './ads'
//clase del plugin de los ads 
class AdsPlugin {
    private ads:Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad
    private adsContainer: HTMLElement;

    constructor(){
        this.ads = Ads.getInstance()
        this.adsContainer = document.createElement('div')
        //Handler 
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    }
    //Methodo run que recibe como parametro un player 
    run(player : MediaPlayer){
        this.player = player ;
        this.player.container.appendChild(this.adsContainer);
        this.media = this.player.media;
        //tiempo entre anuncios 
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    }

    //Handler para tiempo entre anuncios 
    private handleTimeUpdate(){
        const currentTime = Math.floor(this.media.currentTime)
        if (currentTime % 30 ===0){
        this.renderAd()
        }
    }
    //Renderizar el Ad Actual
    private renderAd(){
        if(this.currentAd){
            return;
        }
        const ad = this.ads.getAd(); 
        this.currentAd = ad;
        this.adsContainer.innerHTML = `
        <div class = "ads">  
          <a class = "ads_link" href = "${this.currentAd.url} "target="_blank">
            <img class="ads_img" src="${this.currentAd.imageUrl}" />
            <div class= "ads_info">
                <h5 class="ads_title"> ${this.currentAd.title}</h5>
                <p class="ads_body">${this.currentAd.body}</p>
            </div>
           </a>
        </div>
        `;
        setTimeout(() => {
            this.currentAd = null ;
            this.adsContainer.innerHTML = '';
        }, 10000);
    }
}
export default AdsPlugin;