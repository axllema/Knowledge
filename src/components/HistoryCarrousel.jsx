import Versailles from '../assets/img/categories/Histoire-Science/versailles.png';
import AnneFrank from '../assets/img/categories/Histoire-Science/anne-frank.png';
import WhatTheHealth from '../assets/img/categories/Histoire-Science/what-the-health.png';
import BienEtre from '../assets/img/categories/Histoire-Science/bien-etre.png';
// import '../scss/style.scss';

function HistoryCarrousel() {
    return (
        <div>
            <img alt="Image de ..." src={Versailles} className=''/>
            <p> Le château dévoile son passé </p>

            <img alt="Image de ..." src={AnneFrank} className=''/>
            <p> #AnneFrank vies parallèles </p>

            <img alt="Image de ..." src={WhatTheHealth} className=''/>
            <p> What the health </p>

            <img alt="Image de ..." src={BienEtre} className=''/>
            <p> Industrie du bien-être : potions et poisons </p>

        </div>
    );
}

export default HistoryCarrousel;
