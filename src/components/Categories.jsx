import HistoireImg from '../assets/img/about/histoire.png';
import NatureImg from '../assets/img/about/nature.png';
import ProtestImg from '../assets/img/about/protest.png';
import SportImg from '../assets/img/about/sport.png';
import '../scss/style.scss';

function Categories() {
    return (
        <div>
            <div className='categories-container'>
                <img alt="Image du Sphinx de Gizeh" src={HistoireImg} className='categories-container_pic'/>
                <img alt="Image de montagnes enneigées" src={NatureImg} className='categories-container_pic'/>
                <img alt="Image de protestation" src={ProtestImg} className='categories-container_pic'/>
                <img alt="Image d'athlétisme" src={SportImg} className='categories-container_pic'/>
            </div>
        </div>
    );
}

export default Categories;