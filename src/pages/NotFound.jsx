import { useLocation } from "react-router-dom";
import "../assets/styles/notfound.scss";

const NotFound = () => {
    const location = useLocation();
    const errorType = location.state?.errorType;

    return (
        <div className="notfound">
            <h1>404</h1>
            <p>
                {errorType === "invalid-housing-id"
                    ? "Le logement demandé n'existe pas."
                    : "Oups! La page que vous demandez n'existe pas."}
            </p>
            <a href="/">Retourner à la page d'accueil</a>
        </div>
    );
};

export default NotFound;