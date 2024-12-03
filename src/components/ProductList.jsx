import React from "react";
import { Link, useParams } from "react-router-dom";
import "../ProductList.css";
import productImage from "../assets/product-image.png";

// Datos de los productos
const products = [
  {
    id: 1,
    category: "rostro",
    image: productImage,
    brand: "The Ordinary",
    name: "AHA 30% + BHA 2% Peeling Solution - 30mL",
    oldPrice: "S/. 99.90",
    newPrice: "S/. 89.90",
    details: "Exfoliante químico para una piel más suave y luminosa.",
    reviews: ["¡Me encantó!", "Muy efectivo para pieles grasas."],
  },
  {
    id: 2,
    category: "rostro",
    image: productImage,
    brand: "The Ordinary",
    name: "Ácido Salicílico 2% Solución Exfoliante",
    oldPrice: "S/. 99.90",
    newPrice: "S/. 84.90",
    details: "Ayuda a limpiar los poros y reducir el acné.",
    reviews: ["Fácil de usar y con buenos resultados.", "Perfecto para mi rutina diaria."],
  },
  {
    id: 3,
    category: "ojos",
    image: productImage,
    brand: "Good Molecules",
    name: "Tónico Iluminador de Niacinamida",
    oldPrice: "S/. 134.90",
    newPrice: "S/. 74.90",
    details: "Reduce las manchas y mejora la textura de la piel.",
    reviews: ["Resultados visibles en pocas semanas.", "Mi piel se ve más uniforme."],
  },
  {
    id: 4,
    category: "labios",
    image: productImage,
    brand: "Tower 28 Beauty",
    name: "SOS Daily Rescue Facial Spray",
    oldPrice: "S/. 209.90",
    newPrice: "S/. 109.90",
    details: "Calma y repara la piel sensible.",
    reviews: ["Perfecto para piel irritada.", "Un básico en mi cuidado diario."],
  },
];

const ProductList = () => {
  const { category } = useParams(); // Obtén la categoría desde la URL

  // Filtrar productos según la categoría
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="unique-category-page">
      <main className="unique-products-container">
        <header className="unique-category-header">
          <h1 className="unique-category-title">
            {category ? `Productos de la categoría: ${category}` : "Todos los productos"}
          </h1>
        </header>

        <div className="unique-category-content">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="unique-product-card">
                {product.discount && <div className="unique-discount-badge">{product.discount}</div>}
                <Link to={`/product/${product.id}`} state={{ product }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="unique-product-image"
                  />
                </Link>
                <h4 className="unique-brand">{product.brand}</h4>
                <p className="unique-name">{product.name}</p>
                <div className="unique-prices">
                  <span className="unique-old-price">{product.oldPrice}</span>
                  <span className="unique-new-price">{product.newPrice}</span>
                </div>
                <Link to={`/product/${product.id}`} state={{ product }}>
                  <button className="unique-view-details-btn">Ver detalles</button>
                </Link>
              </div>
            ))
          ) : (
            <p className="unique-no-products">
              No hay productos disponibles para esta categoría.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductList;
