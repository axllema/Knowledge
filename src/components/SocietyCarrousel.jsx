import Devenir from '../assets/img/categories/Society/devenir.png';
import IdentitéTrans from '../assets/img/categories/Society/identite-trans.png';
import Capitalisme from '../assets/img/categories/Society/capitalisme.png';
import NotYourN from '../assets/img/categories/Society/not-your-n.png';
import '../scss/components/_allcarrousel.scss'
// import '../scss/style.scss';

function SocietyCarrousel() {
    return (
        <div className='society-div'>

            <div className='container'>
                <img alt="Image de ..." src={Devenir} className=''/>
                <p>Devenir</p>
            </div>

            <div className='container'>
                <img alt="Image de ..." src={IdentitéTrans} className=''/>
                <p>Identités trans : Au-delà de l’imag </p>
            </div>

            <div className='container'>
                <img alt="Image de ..." src={Capitalisme} className=''/>
                <p>Sauvons le capitalisme</p>
            </div>

            <div className='container'>
                <img alt="Image de ..." src={NotYourN} className=''/>
                <p>I am not your n****</p>
            </div>

        </div>
    );
}

export default SocietyCarrousel;
