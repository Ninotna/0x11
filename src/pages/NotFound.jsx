import { Link } from "react-router-dom";
import "../assets/styles/notfound.scss";

const NotFound = () => {
    return (
        <div className="notfound">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner à la page d'accueil</Link>
        </div>
    );
};

export default NotFound;

