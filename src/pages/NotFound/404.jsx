import { useLocation, Link } from "react-router-dom";
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
      <Link to="/">Retourner à la page d&apos;accueil</Link>
    </div>
  );
};

export default NotFound;
