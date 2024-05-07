import { useState } from 'react';
import { Link } from "react-router-dom";
import PrimNotYour from '../assets/img/categories/Primed/prim-not-your.png';
import PrimWomen from '../assets/img/categories/Primed/prim-women.png';
import PrimeFille from '../assets/img/categories/Primed/prim-fille.png';
// import PlayIcon from '../assets/img/icons/play_icon.png';
import AgeIcon from '../assets/img/icons/age_icon.png';
import DownloadIcon from '../assets/img/icons/download_icon.png';
import '../scss/components/_allcarrousel.scss'
// import '../scss/style.scss';

function PrimedCarrousel() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className='primed-div'>

            <div className='container'>
                <img alt="Image de ..." src={PrimeFille} className=''/>
                <p>Petite fille</p>
            </div>

            <div className='container' onClick={() => setModalIsOpen(true)} >
                <img alt="Image de ..." src={PrimWomen} className=''/>
                <p>Women</p>
            </div>

            <div className='container'>
                <img alt="Image de ..." src={PrimNotYour} className=''/>
                <p>I am not your n**** </p>
            </div>
            
            {modalIsOpen && (
                <div className="modal">

                    <h2>Modal Title</h2>
                    <img alt="Image de ..." src={PrimWomen} className='modal_pic'/>
                    <p> WOMAN</p>

                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                    
                    <img alt="Icone âge." src={AgeIcon} className=''/>
                    <img alt="Icon de téléchargement." src={DownloadIcon} className=''/>

                    <p> 2020 · 1h48 min · #primé #société #actualité #féminisme </p>
                    <p>Ce documentaire est un message d’amour et d’espoir envoyé à toutes les femmes du monde.
                        C’est une fresque qui rend hommage aux femmes, à leurs parcours, à leurs combats et à leurs victoires.
                        
                        <Link to="/movie-details" className="link"> En savoir plus </Link>
                    </p>
                </div>
            )}

        </div>
    );
}

export default PrimedCarrousel;
