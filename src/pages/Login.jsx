import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import users from '../backend/users.json';
import '../scss/style.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find(u => u.username === email && u.password === password);

        if (user) {
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/');
        } else {
            setError('Identifiants incorrects');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    React.useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (loggedIn === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div>
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <div className="sign-in">
                <main className="sign-in-container">
                    <section className="sign-in-container-content">
                        <h1> Connexion </h1>

                        {!isLoggedIn ? (
                            <form onSubmit={handleSubmit}>
                                <div className="field-content">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="..." />
                                </div>

                                <div className="field-content">
                                    <label htmlFor="password">Mot de passe</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="..." />
                                </div>

                                <button type="submit" className="sign-in-button"> S&apos;identifier </button>

                                {error && <p className="error-message">{error}</p>}
                            </form>
                        ) : (
                            <div>
                                <p>Vous êtes connecté.e !</p>
                                <button onClick={handleLogout} className="sign-in-button">Se déconnecter</button>
                            </div>
                        )}

                        {!isLoggedIn && (
                            <React.Fragment>
                                <Link to="/create-account" className="create-account-link"> Créer un compte</Link>
                                <Link to="/forgot-password" className="forgot-password-link">Mot de passe oublié ?</Link>
                            </React.Fragment>
                        )}
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Login;