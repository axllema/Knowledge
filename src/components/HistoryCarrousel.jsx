import Versailles from '../assets/img/categories/Histoire-Science/versailles.png';
import AnneFrank from '../assets/img/categories/Histoire-Science/anne-frank.png';
import WhatTheHealth from '../assets/img/categories/Histoire-Science/what-the-health.png';
import BienEtre from '../assets/img/categories/Histoire-Science/bien-etre.png';
import '../scss/components/_allcarrousel.scss'
import '../scss/style.scss';

function HistoryCarrousel() {
    return (
        <div className='history-div'>
            <div className='container'>
                <img alt="Versailles" src={Versailles} />
                <p>Le château dévoile son passé</p>
            </div>

            <div className='container'>
                <img alt="Anne Frank" src={AnneFrank} />
                <p>#AnneFrank vies parallèles</p>
            </div>

            <div className='container'>
                <img alt="What the Health" src={WhatTheHealth} />
                <p>What the health</p>
            </div>

            <div className='container'>
                <img alt="Bien être" src={BienEtre} />
                <p>Industrie du bien-être : potions et poisons</p>
            </div>
        </div>
    );
}

export default HistoryCarrousel;
