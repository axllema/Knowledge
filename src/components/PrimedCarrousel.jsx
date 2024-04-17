import PrimNotYour from '../assets/img/categories/Primed/prim-not-your.png';
import PrimWomen from '../assets/img/categories/Primed/prim-women.png';
import PrimeFille from '../assets/img/categories/Primed/prim-fille.png';
// import '../scss/pages/_homepage.scss'
// import '../scss/style.scss';

function PrimedCarrousel() {
    return (
        <div>
            <img alt="Image de ..." src={PrimeFille} className=''/>
            <p>Petite fille</p>

            <img alt="Image de ..." src={PrimWomen} className=''/>
            <p>Women</p>

            <img alt="Image de ..." src={PrimNotYour} className=''/>
            <p>I am not your n**** </p>

        </div>
    );
}

export default PrimedCarrousel;
