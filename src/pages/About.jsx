// import '../scss/pages/_homepage.scss'
import Header from '../layout/Header';
import Intro from '../components/Intro';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Footer from '../layout/Footer';
import '../scss/pages/_about.scss';
import '../scss/style.scss';


function Home() {
    return (
        <div>
            <Header/>

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
