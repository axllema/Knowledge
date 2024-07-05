// import '../scss/pages/_homepage.scss'
import { useState, useEffect } from 'react';
import Header from '../layout/Header';
import Intro from '../components/Intro';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Footer from '../layout/Footer';
import '../scss/pages/_about.scss';
import '../scss/style.scss';


function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedIn === 'true');
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <div>
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout}/>

            <div>
                <Intro/>
                <Banner/>
                <Categories/>
            </div>

            <Footer/>
        </div>
    );
}

export default Home;
