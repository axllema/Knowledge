import Joueuses from '../assets/img/categories/Sport-Arts/joueuses.png';
import TaylorSwift from '../assets/img/categories/Sport-Arts/taylor-swift.png';
import NotAGame from '../assets/img/categories/Sport-Arts/not-a-game.png';
import Heroes from '../assets/img/categories/Sport-Arts/heroes.png';
// import '../scss/style.scss';

function SportsCarrousel() {
    return (
        <div className='sports-div'>

            <div className='container'>
                <img alt="Image de ..." src={Joueuses} className=''/>
                <p> Les joueuses #PasLàPourDanser </p>
            </div>

            <div className='container'>
                <img alt="Image de ..." src={TaylorSwift} className=''/>
                <p> Taylor Swift : Folklore, sessions au long pond studio </p>
            </div>

            <div className='container'>
                <img alt="Image de ..." src={NotAGame} className=''/>
                <p> Not a game </p>
            </div>
            
            <div className='container'>
                <img alt="Image de ..." src={Heroes} className=''/>
                <p> Heroes : silence et rock and roll </p>
            </div>

        </div>
    );
}

export default SportsCarrousel;
