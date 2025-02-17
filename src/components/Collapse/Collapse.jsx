import { useState } from "react";
import "../assets/styles/collapse.scss";

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false); // Variable d'état qui permet de recharger la valeur de isOpen à chaque fois que la valeur de setIsOpen change

    // SetIsOpen est une fonction qui permet de changer la valeur de isOpen.
    // C'est une fonctin toggle qui permet de changer la valeur de isOpen.
    // Le booléen isOpen est initialisé à false.
    return (
        <div className="collapse">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <span className={`arrow ${isOpen ? "open" : ""}`}>&#9660;</span>
            </div>
            <div className={`collapse-content ${isOpen ? "show" : ""}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Collapse;
