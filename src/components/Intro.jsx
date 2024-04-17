import { Link } from "react-router-dom"
// import '../scss/pages/_homepage.scss'
import '../scss/style.scss';

function Intro() {
    return (
        <div>
            <p> Knowledge est une nouvelle plateforme de streaming française : nous sommes là pour vous faire découvrir ou redécouvrir des documentaires exceptionnels.
                Nous avons cinq grandes catégories, dont des documentaires primés - vous trouverez forcément votre bonheur.
            </p>

        <Link to="/create-account" className="link">  <button> Rejoindre l&rsquo;aventure </button> </Link>
        </div>
    );
}

export default Intro;
