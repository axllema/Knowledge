// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import logo from '../assets/img/logo/logo.png';
import '../scss/style.scss';

function Logo({ className, imageClassName }) {
    return (
        <Link to="/" className={`main-nav-logo ${className}`}> 
            <img alt="logo de Knowledge" src={logo} className={`main-nav-logo-image ${imageClassName}`}/>
            <h1 className="sr-only">Knowledge</h1>
        </Link>
    );
}

Logo.propTypes = {
    className: PropTypes.string,
    imageClassName: PropTypes.string
};

export default Logo;