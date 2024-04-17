import Header from '../layout/Header';
import Footer from '../layout/Footer';
import WomenTrailer from '../assets/img/women/women.jpeg';
import WomenPic1 from '../assets/img/women/wom1.jpg';
import WomenPic2 from '../assets/img/women/wom2.jpg';
import WomenPic3 from '../assets/img/women/wom3.jpg';
import PlayIcon from '../assets/img/icons/play_icon.png';
import AgeIcon from '../assets/img/icons/age_icon.png';
import DownloadIcon from '../assets/img/icons/download_icon.png';
import '../scss/style.scss';


function Movie() {
    return (
        <div>
            <Header/>

            <div>
                <img alt="Image du trailer du film Women." src={WomenTrailer} className=''/>
                <img alt="Icone de démarrage." src={PlayIcon} className=''/>

                <img alt="Icone âge." src={AgeIcon} className=''/>
                <img alt="Icon de téléchargement." src={DownloadIcon} className=''/>

                <h2> WOMAN </h2>
                <p> 
                    Cinquante pays, 2.000 entrevues et 50 tournages.
                    Ce documentaire est un message d’amour et d’espoir envoyé à toutes les femmes du monde.
                    C’est une fresque qui rend hommage aux femmes, à leurs parcours, à leurs combats et à leurs victoires.
                </p>

                <p>
                    Ce documentaire est un message d’amour et d’espoir envoyé à toutes les femmes du monde.
                    C’est une fresque qui rend hommage aux femmes, à leurs parcours, à leurs combats et à leurs victoires.
                </p>

                <p>
                    Langues : Audio (5), Sous-titres (8).
                    Créateu·rice·s : Anastasia Mikova, Yann Arthus-Bertrand.
                </p>

                <div>
                    <img alt="Image d'une strip-teaseuse se tenant à une chaise, face à un miroir." src={WomenPic1} className=''/>

                    <img alt="Image d'une femme, fixant la caméra, sur fond noir." src={WomenPic2} className=''/>

                    <img alt="Image d'une femme voilée, et de ses enfants." src={WomenPic3} className=''/>
                </div>



            </div>

            <Footer/>
        </div>
    );
}

export default Movie;
