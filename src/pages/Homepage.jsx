import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Header from '../layout/Header';
import PrimedCarrousel from '../components/PrimedCarrousel';
import HistoryCarrousel from '../components/HistoryCarrousel';
import SocietyCarrousel from '../components/SocietyCarrousel';
import NatureCarrousel from '../components/NatureCarrousel';
import SportsCarrousel from '../components/SportsCarrousel';
import Footer from '../layout/Footer';
import '../scss/style.scss';

function Home() {
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedIn === 'true');
        setLoading(false);
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };
    
    return (
        <div>
            <Loader visible={loading} />
            
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

            <div className="homepage-sections">
                <h2>Primés</h2>
                <PrimedCarrousel />
                
                <h2>Histoire et science</h2>
                <HistoryCarrousel />
                
                <h2>Société et économie</h2>
                <SocietyCarrousel />
                
                <h2>Nature et environnement</h2>
                <NatureCarrousel />
                
                <h2>Sport et arts</h2>
                <SportsCarrousel />
            </div>

            <Footer />
        </div>
    );
}

export default Home;