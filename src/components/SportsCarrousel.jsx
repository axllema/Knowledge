import Joueuses from '../assets/img/categories/Sport-Arts/joueuses.png';
import TaylorSwift from '../assets/img/categories/Sport-Arts/taylor-swift.png';
import NotAGame from '../assets/img/categories/Sport-Arts/not-a-game.png';
import Heroes from '../assets/img/categories/Sport-Arts/heroes.png';
// import '../scss/style.scss';

function SportsCarrousel() {
    return (
        <div>
            <img alt="Image de ..." src={Joueuses} className=''/>
            <p> Les joueuses #PasLàPourDanser </p>

            <img alt="Image de ..." src={TaylorSwift} className=''/>
            <p> Taylor Swift : Folklore, sessions au long pond studio </p>

            <img alt="Image de ..." src={NotAGame} className=''/>
            <p> Not a game </p>

            <img alt="Image de ..." src={Heroes} className=''/>
            <p> Heroes : silence et rock and roll </p>

        </div>
    );
}

export default SportsCarrousel;
