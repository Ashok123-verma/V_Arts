import React, { useState } from "react";
import "../styles/gallery.css";
import Lightbox from "./lightBox";
 // Ensure this component is correctly defined and exported

const imageUrls = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "",
];

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open lightbox with the selected image
  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About page! Here is a gallery for you to explore.</p>
      <div className="gallery-container">
        {imageUrls.map((url, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={url}
              alt={`Gallery Item ${index + 1}`}
              onClick={() => openLightbox(index)}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          images={imageUrls}
          currentIndex={currentIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default About;
