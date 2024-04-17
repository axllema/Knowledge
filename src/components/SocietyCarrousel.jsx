import Devenir from '../assets/img/categories/Society/devenir.png';
import IdentitéTrans from '../assets/img/categories/Society/identite-trans.png';
import Capitalisme from '../assets/img/categories/Society/capitalisme.png';
import NotYourN from '../assets/img/categories/Society/not-your-n.png';
// import '../scss/style.scss';

function SocietyCarrousel() {
    return (
        <div>
            <img alt="Image de ..." src={Devenir} className=''/>
            <p>Devenir</p>

            <img alt="Image de ..." src={IdentitéTrans} className=''/>
            <p>Identités trans : Au-delà de l’imag </p>

            <img alt="Image de ..." src={Capitalisme} className=''/>
            <p>Sauvons le capitalisme</p>

            <img alt="Image de ..." src={NotYourN} className=''/>
            <p>I am not your n****</p>

        </div>
    );
}

export default SocietyCarrousel;
