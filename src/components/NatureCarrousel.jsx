import Oiseaux from '../assets/img/categories/Nature-Env/danse-oiseaux.png';
import Cowspiracy from '../assets/img/categories/Nature-Env/cowspiracy.png';
import ZooZac from '../assets/img/categories/Nature-Env/zoo-zac.png';
import MovingArt from '../assets/img/categories/Nature-Env/moving-art.png';
// import '../scss/style.scss';

function NatureCarrousel() {
    return (
        <div className='nature-div'>

            <div className='container'>
                <img alt="Image de ..." src={Oiseaux} className=''/>
                <p> La danse des oiseaux </p>
            </div>

            <div className='container'>
                <img alt="Image de ..." src={Cowspiracy} className=''/>
                <p> Conspiracy : le secret de la durabilité </p>
            </div>

            <div className='container'>
                <img alt="Image de ..." src={ZooZac} className=''/>
                <p> Down to Earth with Zac Efron </p>
            </div>

            <div className='container'>
                <img alt="Image de ..." src={MovingArt} className=''/>
                <p> Moving art </p>
            </div>

    </div>

    );
}

export default NatureCarrousel;
