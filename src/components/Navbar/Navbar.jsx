import { Link } from "react-router-dom";
import "../assets/styles/navbar.scss"; // Style du navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
        </nav>
    );
};

export default Navbar;
