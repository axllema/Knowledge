import { useState } from 'react';
import { Link } from "react-router-dom";
import PrimNotYour from '../assets/img/categories/Primed/prim-not-your.png';
import PrimWomen from '../assets/img/categories/Primed/prim-women.png';
import PrimeFille from '../assets/img/categories/Primed/prim-fille.png';
import AgeIcon from '../assets/img/icons/age_icon.png';
import DownloadIcon from '../assets/img/icons/download_icon.png';
import '../scss/components/_allcarrousel.scss';

function PrimedCarrousel() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className='primed-div'>

            <div className='container'>
                <img alt="Petite fille" src={PrimeFille} />
                <p>Petite fille</p>
            </div>

            <div className='container' onClick={() => setModalIsOpen(true)}>
                <img alt="Women" src={PrimWomen} />
                <p>Women</p>
            </div>

            <div className='container'>
                <img alt="I am not your negro" src={PrimNotYour} />
                <p>I am not your n****</p>
            </div>

            {modalIsOpen && (
                <div className="modal">
                    <img alt="Women" src={PrimWomen} className='modal_pic' />

                    <div className='modal_tab'>
                        <div className='modal_tab_title_container'>
                            <p className="modal_tab_title_container_item"> WOMAN</p>
                        </div>
                        <button onClick={() => setModalIsOpen(false)}>Close</button>
                        <img alt="Age icon" src={AgeIcon} className='modal_tab_age_icon' />
                        <img alt="Download icon" src={DownloadIcon} className='modal_tab_download_icon' />
                    </div>

                    <p className='modal_description'>2020 · 1h48 min · #primé #société #actualité #féminisme</p>
                    <p className='modal_description'>
                        Ce documentaire est un message d’amour et d’espoir envoyé à toutes les femmes du monde.
                        C’est une fresque qui rend hommage aux femmes, à leurs parcours, à leurs combats et à leurs victoires.
                        <Link to="/movie-details" className="link"> En savoir plus </Link>
                    </p>
                </div>
            )}
        </div>
    );
}

export default PrimedCarrousel;
