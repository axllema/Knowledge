import { Link } from "react-router-dom"
// import '../scss/pages/_homepage.scss'
import '../scss/style.scss';

function Intro() {
    return (
        <div className="container_intro">
            <p className="container_intro_text">
                Knowledge est une nouvelle plateforme de streaming française : <br/>
                nous sommes là pour vous faire découvrir ou redécouvrir <br/>
                des documentaires exceptionnels.
            </p>

            <p className="container_intro_text">
                Nous avons cinq grandes catégories, dont des documentaires <br/> primés - vous trouverez forcément votre bonheur.
            </p>

        <Link to="/create-account" className="container_intro_button link">  <button> Rejoindre l&rsquo;aventure </button> </Link>
        </div>
    );
}

export default Intro;
