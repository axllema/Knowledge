import Header from '../layout/Header';
import PrimedCarrousel from '../components/PrimedCarrousel';
import HistoryCarrousel from '../components/HistoryCarrousel';
import SocietyCarrousel from '../components/SocietyCarrousel';
import NatureCarrousel from '../components/NatureCarrousel';
import SportsCarrousel from '../components/SportsCarrousel';
import Footer from '../layout/Footer';
// import '../scss/pages/_homepage.scss'
import '../scss/style.scss';

function Home() {
    return (
        <div>
            <Header/>

            <div>
                <PrimedCarrousel/>
                <HistoryCarrousel/>
                <SocietyCarrousel/>
                <NatureCarrousel/>
                <SportsCarrousel/>
            </div>

            <Footer/>
        </div>
    );
}

export default Home;
