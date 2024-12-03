import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CategoriesCarousel.css";
import rostro from "../assets/categorias/rostro.png";
import labios from "../assets/categorias/labios.png";
import ojos from "../assets/categorias/ojos.png";
import cejas from "../assets/categorias/cejas.png";

const CategoriesCarousel = () => {
  // Relación de categorías con sus imágenes y rutas
  const categories = [
    { name: "Rostro", image: rostro, route: "/categoria/rostro" },
    { name: "Labios", image: labios, route: "/categoria/labios" },
    { name: "Ojos", image: ojos, route: "/categoria/ojos" },
    { name: "Cejas y Pestañas", image: cejas, route: "/categoria/cejas-pestanas" },
    // Repetición
    { name: "Rostro", image: rostro, route: "/categoria/rostro" },
    { name: "Labios", image: labios, route: "/categoria/labios" },
    { name: "Ojos", image: ojos, route: "/categoria/ojos" },
    { name: "Cejas y Pestañas", image: cejas, route: "/categoria/cejas-pestanas" }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotación automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [categories.length]);

  return (
    <div className="carouselo">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Mueve el carrusel
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {categories.map((category, index) => (
          <div key={index} className="carousel-item">
            {/* Enlace para la categoría */}
            <Link to={category.route}>
              <img
                src={category.image}
                alt={category.name}
                className="carousel-image"
              />
            </Link>
            <p>{category.name}</p> {/* Muestra el nombre */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCarousel;
