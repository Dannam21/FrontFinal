import React, { useEffect, useState } from "react";
import "../ImageCarousel.css"; 
import image1 from "../assets/banner-image.png";
import image2 from "../assets/product-image.png";

const images = [image1, image2, image1, image2, image1];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  // Cambiar la imagen al hacer clic en un dot
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {/* Imágenes del carrusel */}
      <div
        className="carousel-images"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>

      {/* Indicadores (Dots) */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
