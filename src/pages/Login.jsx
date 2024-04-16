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
            <div className="test">
                <main className="main bg-dark">
                    <section className="sign-in-content">
                        <h1>Sign In</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="field-content">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" placeholder="Enter your email" />
                            </div>
                            <div className="field-content">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter your password" />
                            </div>
                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me"> Se souvenir de moi</label>
                            </div>
                            <button type="submit" className="sign-in-button"> S&rsquo;identifier </button>
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
