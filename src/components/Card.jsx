import { Link } from "react-router-dom";
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
