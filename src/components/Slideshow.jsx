import { useState } from "react";
import "../assets/styles/slideshow.scss";

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour naviguer vers l'image suivante
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    // Fonction pour naviguer vers l'image précédente
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    // Ne pas afficher les flèches/numérotation si une seule image
    if (images.length === 1) {
        return (
            <div className="slideshow">
                <img src={images[0]} alt="Slide unique" className="slide" />
            </div>
        );
    }

    return (
        <div className="slideshow">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide" />
            <button className="prev" onClick={prevSlide}>
                &#9664; {/* Flèche gauche */}
            </button>
            <button className="next" onClick={nextSlide}>
                &#9654; {/* Flèche droite */}
            </button>
            <div className="pagination">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
};

export default Slideshow;
