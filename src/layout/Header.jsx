import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import '../scss/layout/_header.scss';
// import userIcon from '../../back/designs/img/user-icon.webp';
// import signOutIcon from '../../back/designs/img/signout-icon.webp';
//import { useDispatch, useSelector } from 'react-redux';
// import { login, logout } from '../Redux/reducers/authSlice.jsx';
// import '../scss/layout/_header.scss';

function Header({ isLoggedIn, onLogout }) {
    const handleLogout = () => {
        onLogout();
    };

    return (
        <header>
            <nav className="main-nav">
                <Logo className="main-nav-logo" imageClassName="main-nav-logo-image" />
                <div className="main-nav-links">
                    <Link to="/about" className="link"> À propos </Link>
                    {isLoggedIn ? (
                        <>
                            <Link to="/profile" className="link"> Profil </Link>
                            <button onClick={handleLogout} className="link"> Déconnexion </button>
                        </>
                    ) : (
                        <Link to="/login" className="link"> Se connecter </Link>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired,
};