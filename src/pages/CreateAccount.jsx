// import { Link } from "react-router-dom"
// import '../scss/pages/_homepage.scss'
import Header from '../layout/Header.jsx';
import Footer from '../layout/Footer.jsx';
import '../scss/style.scss';


function CreateAccount() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Votre logique de gestion de la soumission du formulaire ici
    };

    return (
        <div className="create-account">
            <Header />
            <div className="create-account-container">
                <main className="create-account-container-content">
                    <h1>Créer un compte</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="field-content">
                            <label htmlFor="username">Nom d&rsquo;utilisateur</label>
                            <input type="text" id="username" name="username" placeholder="Nom d'utilisateur" />
                        </div>

                        <div className="field-content">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email" />
                        </div>

                        <div className="field-content">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" id="password" name="password" placeholder="Mot de passe" />
                        </div>

                        <button type="submit" className="create-account-button">Créer un compte</button>
                        <a href="/login" className="sign-in-link">Déjà un compte ? Connectez-vous</a>
                    </form>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default CreateAccount;