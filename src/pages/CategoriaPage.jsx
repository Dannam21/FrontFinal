import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Filters from "../components/Filters"; // Componente de filtros
import DetalleProducto from "./DetalleProducto"; // Importar el modal del producto
import "../CategoriaPage.css";
import productImage from "../assets/product-image.png";

// Datos de productos
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
    reviews: [
      { user: "Ana", comment: "Me encantó este producto", rating: 5 },
      { user: "Luis", comment: "Buen exfoliante", rating: 4 },
    ],
  },
  {
    id: 2,
    category: "labios",
    image: productImage,
    brand: "Rare Beauty",
    name: "Soft Pinch Liquid Blush",
    oldPrice: "S/. 124.90",
    newPrice: "S/. 94.90",
    details: "Blush líquido de larga duración con acabado natural.",
    reviews: [{ user: "Marta", comment: "Excelentes colores", rating: 5 }],
  },
  {
    id: 3,
    category: "ojos",
    image: productImage,
    brand: "Fenty Beauty",
    name: "Full Frontal Volume Mascara",
    oldPrice: "S/. 135.90",
    newPrice: "S/. 105.90",
    details: "Máscara de pestañas para volumen extremo.",
    reviews: [{ user: "Pedro", comment: "Volumen increíble", rating: 5 }],
  },
];

const CategoriaPage = () => {
  const { category } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal

  // Filtrar productos por categoría
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="categoria-page">
      {/* Filtros en el lado izquierdo */}
      <aside className="filters-container">
        <Filters />
      </aside>

      {/* Productos a la derecha */}
      <main className="products-container">
        <header className="categoria-header">
          <h1 className="categoria-title">
            Productos en la categoría: <span>{category.toUpperCase()}</span>
          </h1>
        </header>
        <div className="categoria-content">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => openModal(product)} // Abre el modal con los detalles
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h4 className="brand">{product.brand}</h4>
                <p className="name">{product.name}</p>
                <div className="prices">
                  <span className="old-price">{product.oldPrice}</span>
                  <span className="new-price">{product.newPrice}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="no-products">
              No hay productos disponibles para esta categoría.
            </p>
          )}
        </div>
      </main>

      {/* Modal del producto */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal-btn" onClick={closeModal}>
              ✕
            </button>
            <DetalleProducto productDetails={selectedProduct} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriaPage;
