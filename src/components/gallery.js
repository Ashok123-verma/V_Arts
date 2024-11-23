import React,{useState} from "react";
import "../styles/gallery.css";
import Lightbox from "../components/lightBox";

const imageUrls = [
  // Add your image URLs here
  "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg",
  "https://w0.peakpx.com/wallpaper/313/387/HD-wallpaper-fire-ff-gaming-garena-garena-fire.jpg",
  "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg",
  "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg",
  "https://w0.peakpx.com/wallpaper/313/387/HD-wallpaper-fire-ff-gaming-garena-garena-fire.jpg",
  "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg",
  "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg",
  "https://w0.peakpx.com/wallpaper/313/387/HD-wallpaper-fire-ff-gaming-garena-garena-fire.jpg",
  "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg",
  "https://w0.peakpx.com/wallpaper/313/387/HD-wallpaper-fire-ff-gaming-garena-garena-fire.jpg",
  "https://w0.peakpx.com/wallpaper/313/387/HD-wallpaper-fire-ff-gaming-garena-garena-fire.jpg",
  "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg",
  "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg",
  "https://w0.peakpx.com/wallpaper/313/387/HD-wallpaper-fire-ff-gaming-garena-garena-fire.jpg",
  "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg",
  "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg",
  "https://w0.peakpx.com/wallpaper/313/387/HD-wallpaper-fire-ff-gaming-garena-garena-fire.jpg",
  "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg",
  "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg",
  "https://w0.peakpx.com/wallpaper/14/382/HD-wallpaper-ff-hip-hop-bundle-fire-essy-fire-essy-game-thumbnail.jpg"
];

function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="gallery-container">
        {imageUrls.map((url, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={url}
              alt={`Gallery ${index + 1}`}
              onClick={() => openLightbox(index)}
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
}

export default Gallery;
