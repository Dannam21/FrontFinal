import React from "react";
import { Link } from "react-router-dom"; // Importa Link para navegación
import "../CategoriesCarousel.css";
import rostro from "../assets/categorias/rostro.png";
import labios from "../assets/categorias/labios.png";
import ojos from "../assets/categorias/ojos.png";
import cejas from "../assets/categorias/cejas.png";

const CategoriesCarousel = () => {
  const categories = [
    { name: "Rostro", image: rostro, route: "/categoria/rostro" },
    { name: "Labios", image: labios, route: "/categoria/labios" },
    { name: "Ojos", image: ojos, route: "/categoria/ojos" },
    { name: "Cejas y Pestañas", image: cejas, route: "/categoria/cejas-pestanas" },
  ];

  return (
    <div className="carousel">
      <div className="carousel-track">
        {categories.map((category, index) => (
          <div key={index} className="carousel-item">
            <Link to={category.route}>
              <img src={category.image} alt={category.name} className="carousel-image" />
            </Link>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCarousel;
