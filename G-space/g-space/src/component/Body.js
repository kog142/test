import {react, useState} from 'react';
import style from '../style/style.css';
import clip from '../assets/videos/apex(1).mp4';
import {FaHeadset} from 'react-icons/fa';
import {GiMailedFist} from 'react-icons/gi';
import {BsFillPeopleFill} from 'react-icons/bs';
import {BsCodeSlash} from 'react-icons/bs';
import {Avatar, avatar} from '@mui/material';
import mvp from '../assets/images/avatar01.jpeg';
import banner from '../assets/images/banner.jpg';
import {Link} from 'react-router-dom';

function Body() {

    const [logForm, setPopupForm] = useState(false);

const openPopup = () => {
    setPopupForm(true);
}

const closePopup = () => {
    setPopupForm(false);
}

   return  <div className='full-container'>
        <div className='semifull-container'>
                            {/*début du header */}

        <div id='menu'>
            <header>
            <div className='logo'>
            <h1>Logo Here</h1>
        </div>
                <div>
                    <ul>
                    <a href='#'><li>Accueil</li></a>
                    <a href='#'><li>A propos</li></a>
                    <a href='#'><li>Contact</li></a>
                    </ul>
                </div>
                <div id='login-link'>
                    <ul>
                    <button onClick={openPopup} className='button'><li>Connexion</li></button>
                    <Link to= '/SignIn'>
                        <li>Inscription</li>
                    </Link>
                    </ul>
                </div>
            </header>
        </div>

        {/*Fin du header */}

        {/* Afficher la popup si logForm est vrai */}
        {logForm && (
          <div className='popupForm'>
            <div className='overlay'>
                <div className='modal-content'>  
                    <div className='form-block'>
                        <form action='' method='GET'>
                        <h1>Logo Here</h1>
                        <h2>Connectez-vous</h2>
                        <p>Connectez-vous pour plonger dans un univers de compétition, de créativité et de camaraderie. L'aventure continue, et c'est grâce à vous.</p>
                        <input type='text' name='pseudo' id='username' required placeholder='Entrez votre pseudo'/>
                        <input type='password' name='mot-de-passe' id='password' required placeholder='Entrez votre mot de passe'/>
                        <label className='memory'>
                        <input type="checkbox" value="se-souvenir-de-moi" required/>
                        Se souvenir de moi
                        </label>
                        <Link to='/SideBar'>
                            <input type='submit' value='Connexion' id='submit' />
                        </Link>
                        </form>
                    <button onClick={closePopup} className='close-modal'>
                        Fermer
                    </button>
                    </div>
                </div>
            </div>
          </div>
        )}

        <div className='under-header-text-container'>
            <div className='under-header-text'>
                <h1> G-Space : Là où l'univers du gaming atteint de nouveaux sommets. </h1>  {/*    */}
                <p> Explorez un environnement conçu sur mesure pour les joueurs, où chaque clic est une quête. </p>
            </div>
        </div>
        <div className='section-advantages'>
            <div data-id='fs-advantages'>
               <div className='clip'>
                <div className='avatar'>
                <Avatar src={mvp} alt='mvp' /><a href='#'><h3>kog142</h3></a>
                </div>
                    <video autoPlay muted loop style={{ width:'250%', borderRadius:'2%',boxShadow:'2px 2px 5px 2px rgba(0, 0, 0, 1)'}}><source src={clip} type='video/mp4'/></video>
                </div>
                <div className='description-clip'>
                    <h2>Mise en Avant Hebdomadaire : Le Clip Épinglé Élu par les Joueurs</h2>
                    <p>Partagez vos moments de performance époustouflante dans les mondes virtuels en publiant vos clips d'exploits les plus spectaculaires. Lancez-vous dans la course pour devenir le Champion de la Semaine en accumulant le plus grand nombre de likes sur notre plateforme. Le clip qui remportera le plus de likes sera mis en avant, épinglé dans le fil d'actualité de tous les utilisateurs pendant une semaine entière. C'est votre opportunité de briller, de mettre en valeur vos compétences exceptionnelles et de rejoindre les rangs d'élite de notre communauté de passionnés. Rejoignez-nous et entrez dans la compétition pour la reconnaissance et les honneurs !</p>
                </div>
            </div>

            <div data-id='sd-advantages'>
            <div className='sd-motivation'>
                    <GiMailedFist size='50px'/><h2>La Compétitivité</h2>
                    <p>En tant que gamer compétitif, vous comprenez l'importance de fournir un environnement qui encourage la compétition saine et motive les joueurs à se surpasser pour atteindre l'excellence.</p>
                </div>
                <div className='sd-description'>
                    {/*<PiMicrophoneLight size='15em' color='#698EBF'>*/}
                    <FaHeadset size='50px'/><h2>Partagez, Écoutez, Jouez, Échangez des Astuces en Live</h2>
                    <p> Explorez la possibilité de partager vos moments épiques, d'écouter les conseils de vos coéquipiers, de jouer en collaboration et d'échanger des astuces en temps réel.</p>
                </div>
            </div>
            <div data-id='sd-advantages-second-block'>
            <div className='sd-motivation'>
            <BsFillPeopleFill size='50px'/><h2>Communauté et Interactions</h2>
                    <p>En utilisant Notre compréhension des interactions en ligne, vous pourrez développer des fonctionnalités qui favorisent la communication et la collaboration au sein de la communauté G-Space, offrant aux joueurs un espace pour partager des stratégies, des astuces et des succès.</p>
                </div>
                <div className='sd-description'>
                    {/*<BsCodeSlash size='50px'>*/}
                    <BsCodeSlash size='50px'/><h2>Soutien à la Créativité </h2>
                    <p>En tant que passionné de jeux et de développement, Nous comprenons l'importance de fournir des outils et des fonctionnalités qui permettent aux joueurs de créer du contenu, de personnaliser leur expérience et d'exprimer leur créativité.</p>
                </div>
            </div>
   </div>
        </div>
   <footer className='footer'>
        <div className='footer-link'>
            <div className='footer-picture'>
                    <image></image>
                </div>
                <div className='social-media'>
                    <ul>
                    <li data-id = 'title-rs'>Réseaux sociaux</li>
                        <a href='#'><li>Facebook</li></a>
                        <a href='#'><li>Discord</li></a>
                        <a href='#'><li>Tiktok</li></a>
                    </ul>
                </div>

                <div className='products'>
                    <ul>
                        <li data-id = 'title'>Produits</li>
                        <a href='#'><li>Télécharger</li></a>
                        <a href='#'><li>Statut</li></a>
                    </ul>
                </div>
                <div className='Entreprise'>
                    <ul>
                        <li data-id = 'title'>Entreprise</li>
                        <a href='#'><li>Actualité</li></a>
                        <a href='#'><li>A propos</li></a>
                        <a href='#'><li>Assistance</li></a>
                    </ul>
                </div>
                
                <div className='Charte' >
                    <ul>
                        <li data-id = 'title'>Charte</li>
                        <a href='#'><li>Condition d'utilisation</li></a>
                        <a href='#'><li>Confidentialité</li></a>
                        <a href='#'><li>Usage</li></a>
                        <li className='dead-link'>Présentation de  <a href='#'><label> Nexus_WD</label></a></li>
                    </ul>
                </div>

        </div>
    </footer>
</div>
}

export default Body;