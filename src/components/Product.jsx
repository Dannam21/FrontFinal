import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams(); // Obtiene el ID del producto desde la URL

  // Simula la obtención de detalles del producto
  const product = {
    id,
    name: "Producto de ejemplo",
    brand: "Marca de ejemplo",
    price: "S/. 99.90",
    description: "Descripción detallada del producto aquí.",
    image: "https://via.placeholder.com/300x600", // Imagen de prueba
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "300px", height: "600px" }} />
      <p>Marca: {product.brand}</p>
      <p>Precio: {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default Product;
