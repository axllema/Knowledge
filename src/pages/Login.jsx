import Header from '../layout/Header.jsx';
import Footer from '../layout/Footer.jsx';
import '../scss/style.scss';

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Votre logique de gestion de la soumission du formulaire ici
    };

    return (
        <div>
            <Header/>
            <div className="sign-in">
                <main className="sign-in-container">
                    <section className="sign-in-container-content">
                        <h1> Connexion - work in progress </h1>

                        <form onSubmit={handleSubmit}>
                            <div className="field-content">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" placeholder="..." />
                            </div>
                            
                            <div className="field-content">
                                <label htmlFor="password">Mot de passe</label>
                                <input type="password" id="password" name="password" placeholder="..." />
                            </div>

                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me"> Se souvenir de moi</label>
                            </div>

                            <button type="submit" className="sign-in-button"> S&rsquo;identifier </button>

                            <a href="/create-account" className="create-account-link"> Créer un compte</a>
                            <a href="/forgot-password" className="forgot-password-link">Mot de passe oublié ?</a>
                            
                        </form>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Login;
