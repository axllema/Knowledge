import { useState, useEffect } from 'react'; 
import Loader from '../components/Loader';

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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulates an asynchronous operation (e.g., fetching data)
        const fakeAsyncOperation = () => {
            setTimeout(() => {
                setLoading(false); // sets loading to false after the operation is complete
            }, 1500); // simulates 2 seconds of loading
        };

        fakeAsyncOperation();
    }, []);

    return (
        <div>
            <Loader visible={loading} />
            
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
