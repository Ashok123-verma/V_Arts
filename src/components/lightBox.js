import React from "react";
import "../styles/lightbox.css";

const Lightbox = ({ images, currentIndex, onClose }) => {
  const [index, setIndex] = React.useState(currentIndex);

  const goToPrevious = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="lightbox-overlay">
      <div className="lightbox-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <button className="prev-button" onClick={goToPrevious}>
          &#8249;
        </button>
        <img
          src={images[index]}
          alt={`Image ${index + 1}`}
          className="lightbox-image"
        />
        <button className="next-button" onClick={goToNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
