import react from 'react';
import { Link } from 'react-router-dom';

    function SignIn(){
        return <div className='main-box-content'>
            <div className='form-box'>
                <form action='/api/g-space-data' method='POST'>
                    <h1>Logo Here</h1>
                    <h2>Inscrivez-vous</h2>
                    <input type='text' name='nom'  id='nom' placeholder='Nom' required/>
                    <input type='text' name='prenom' id='prenom' placeholder='Prénom' required/>
                    <input type='email' name='mail' id='mail' placeholder='E-mail' required/>
                    <input type='text' name='pseudo' id='pseudo' placeholder='Pseudo' required/>
                    <input type='password' name='mot-de-passe' id='password' placeholder='mot de passe' required />
                    <label className='Usercondition'>
                        <input type="checkbox" value="accepte-conditions" required/>
                        J'accepte les conditions d'utilisation
                    </label>
                    <input type='submit' value="S'inscrire" id='submit'/>
                    <Link to= '/Body'>
                        <label className='backHomePage'>Retour a l'accueil</label>
                    </Link>

                </form>
            </div>
        </div>
    }

export default SignIn;