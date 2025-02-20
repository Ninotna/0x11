import React, { useState } from "react";
import arrowPrevious from "../../assets/icons/arrowPrevious.svg";
import arrowNext from "../../assets/icons/arrowNext.svg";

function Carousel({ data }) {
  const { pictures, title } = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = pictures.length;

  // const onArrowClick = (direction) => {
  //   const increment = direction === "left" ? -1 : 1;
  //   const newIndex = (currentIndex + increment + totalSlides) % totalSlides;
  //   setCurrentIndex(newIndex);
  // };

  const onArrowClick = (direction) => {
    const isLeft = direction === "left";
    const newIndex = isLeft ? currentIndex - 1 : currentIndex + 1;

    if (newIndex < 0) {
      setCurrentIndex(totalSlides - 1); // Revient au dernier slide si on dépasse à gauche
    } else if (newIndex >= totalSlides) {
      setCurrentIndex(0); // Revient au premier slide si on dépasse à droite
    } else {
      setCurrentIndex(newIndex); // Sinon, met à jour normalement
    }
  };

  return (
    <section className="carousel">
      <div className="carousel__container">
        <div className="carousel__pix">
          <img src={pictures[currentIndex]} alt={`${title}-${currentIndex}`} />
        </div>
      </div>
      {totalSlides > 1 && (
        <div>
          <span className="carousel__counter">
            {currentIndex + 1}/{totalSlides}
          </span>
          <div className="carousel__button">
            <button
              type="button"
              className="carousel__button--arrowPrevious"
              direction="left"
              onClick={() => onArrowClick("left")}
            >
              <img src={arrowPrevious} alt="Bouton précédent" />
            </button>
            <button
              type="button"
              className="carousel__button--arrowNext"
              direction="right"
              onClick={() => onArrowClick("right")}
            >
              <img src={arrowNext} alt="Bouton suivant" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Carousel;
