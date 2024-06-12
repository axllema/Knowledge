import HistoireImg from '../assets/img/about/histoire.png';
import NatureImg from '../assets/img/about/nature.png';
import ProtestImg from '../assets/img/about/protest.png';
import SportImg from '../assets/img/about/sport.png';
import '../scss/style.scss';

function Categories() {
    return (
        <div>
            <div className='categories-container'>

            <div className='categories-item'>
                <img alt="Image de montagnes enneigées" src={NatureImg} className='categories-item_pic'/>
                <p>Nature et environnement</p>
            </div>

            <div className='categories-item'>
                <img alt="Image de protestation" src={ProtestImg} className='categories-item_pic'/>
                <p>Société et économie</p>
            </div>

            <div className='categories-item'>
                <img alt="Image du Sphinx de Gizeh" src={HistoireImg} className='categories-item_pic'/>
                <p>Histoire et science</p>
            </div>

            <div className='categories-item'>
                <img alt="Image d'athlétisme" src={SportImg} className='categories-item_pic'/>
                <p>Sport et arts</p>
            </div>
                
            </div>
        </div>
    );
}

export default Categories;