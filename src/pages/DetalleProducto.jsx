import React from "react";
import { useLocation } from "react-router-dom";
import Reviews from "../components/Reviews";
import Filters from "../components/Filters"; // Importar los filtros
import "../DetalleProducto.css";

const DetalleProducto = () => {
  const { state } = useLocation(); // Obtiene el estado enviado desde la navegación
  const productDetails = state?.product; // Accede al producto desde el estado

  if (!productDetails) {
    return <p>No se encontró el producto.</p>;
  }

  return (
    <div className="detalle-producto-page">
      {/* Filtros a la izquierda */}
      <aside className="filters-container">
        <Filters />
      </aside>

      {/* Detalle del producto */}
      <div className="detalle-producto-container">
        <div className="product-main">
          <div className="product-gallery">
            <img
              src={productDetails.image}
              alt="Producto"
              className="main-product-image"
            />
            <div className="thumbnail-container">
              {productDetails.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Producto ${index + 1}`}
                  className={`thumbnail ${
                    productDetails.image === image ? "active-thumbnail" : ""
                  }`}
                  onClick={() => console.log("Thumbnail clicked")} // Acción al hacer clic (opcional)
                />
              ))}
            </div>
          </div>
          <div className="product-info">
            <h1 className="product-name">{productDetails.name}</h1>
            <p className="product-price">{productDetails.newPrice}</p>
            <p className="product-availability">Disponible</p>
            <div className="quantity-container">
              <button>-</button>
              <input type="number" min="1" max="10" defaultValue="1" />
              <button>+</button>
            </div>
            <button className="add-to-cart">Comprar ahora</button>
            <p className="product-description">{productDetails.details}</p>
          </div>
        </div>
        {/* Reseñas en el ancho completo */}
        <div className="product-reviews">
          <Reviews reviews={productDetails.reviews || []} />
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
