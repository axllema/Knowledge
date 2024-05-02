import PropTypes from 'prop-types';
import Logo from '../components/Logo';
import '../scss/style.scss';
import '../scss/components/_loader.scss';

const Loader = ({ visible }) => {
    return (
        <div className={`loadingScreen ${visible ? 'visible' : ''}`}>
            <Logo className="loadingScreen__logo" imageClassName="loadingScreen__logo-image"/>
        </div>
    );
};

Loader.propTypes = {
    visible: PropTypes.bool.isRequired,
};

export default Loader;