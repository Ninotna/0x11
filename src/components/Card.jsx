import { Link } from "react-router-dom";
// Link est un composant de navigation qui permet de naviguer entre les différentes pages de l'application.
// React-router-dom est une librairie qui permet de gérer la navigation dans une application React.
// Cela change le contenu à l'intérieur de la balise <div> sans recharger la page.
// On est sur une one single page application (SPA) qui ne se recharge pas à chaque changement de page.
// On a l'url qui change mais pas la page.
import "../assets/styles/card.scss";

const Card = ({ id, title, cover }) => {
    return (
        <Link to={`/housing/${id}`} className="card">
            <img src={cover} alt={title} />
            <div className="overlay">
                <h2>{title}</h2>
            </div>
        </Link>
    );
};

export default Card;
