import BannerImg from '../assets/img/about/accueil.png';

function Banner() {
    return (
        <div className='intro-banner_img'> 
            <img alt="image de bannière avec texte : L'aventure du savoir commence maintenant" src={BannerImg} className='banner-img'/>
        </div>
    );
}

export default Banner;