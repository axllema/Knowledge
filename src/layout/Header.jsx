import { Link } from "react-router-dom";
import Logo from '../components/Logo';
// import userIcon from '../../back/designs/img/user-icon.webp';
// import signOutIcon from '../../back/designs/img/signout-icon.webp';
//import { useDispatch, useSelector } from 'react-redux';
// import { login, logout } from '../Redux/reducers/authSlice.jsx';
// import '../scss/layout/_header.scss';
import '../scss/style.scss';
import '../scss/layout/_header.scss';


function Header() {
    return (
        <header>
            <nav className="main-nav">
                <Logo className="main-nav-logo" imageClassName="main-nav-logo-image" />
                <div className="main-nav-links">
                    <Link to="/about" className="link"> À propos </Link>
                    <Link to="/login" className="link"> Se connecter </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;