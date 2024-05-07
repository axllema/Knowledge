// import * as React from 'react';
// import { Link } from "react-router-dom"
// mettre navicons footer , pour git & linkedin qd meme
// import Logo from '../components/Logo.jsx';
import '../scss/layout/_footer.scss';
import '../scss/style.scss';

function Footer() {
    return (
        <nav className="footer">
            <div className="footer-items">
                <p> Conditions d&rsquo;utilisation et Politique de confidentialité Donnez-nous votre avis Aide <span className="footer-items-text-span"> © </span> Knowledge </p>
                <p className="footer-items-text"> <span className="footer-items-text-span"> © </span> Axelle Maolé - Tous droits réservés - 2024.</p>
            </div>
        </nav>
    );
}

export default Footer;