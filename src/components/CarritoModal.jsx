import React, { useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../CarritoModal.css";
import { CartContext } from "../CartContext";

const CarritoModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  const navigate = useNavigate();
  const {
    cartItems,
    getTotalPrice,
    removeItemFromCart,
    updateCartItemQuantity,
    clearCart,
    addOrder,
  } = useContext(CartContext);

  const cliente = {
    nombre: "Nombre del Cliente",
    correoElectronico: "cliente@example.com",
    telefono: "123456789",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleCreateOrder = () => {
    const pedido = {
      descripcion: "Pedido de productos",
      productos: cartItems.map((item) => ({
        id: item.id,
        nombre: item.name,
        descripcion: item.description || "Sin descripción",
        precio: item.price,
        cantidad: item.quantity,
      })),
      cliente: {
        nombre: cliente.nombre,
        correoElectronico: cliente.correoElectronico,
        telefono: cliente.telefono,
      },
    };

    // Simulación de creación de pedido
    console.log("Pedido creado:", pedido);

    const newOrder = {
      idPedido: `PEDIDO-${Date.now()}`, // Genera un ID único
      productos: cartItems,
      total: getTotalPrice(),
      fecha: new Date().toISOString(),
    };

    addOrder(newOrder); // Agrega el pedido a la lista de pedidos
    clearCart(); // Limpia el carrito
    navigate(`/pedido-realizado/${newOrder.idPedido}`, {
      state: { mensaje: "Pedido creado exitosamente" },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay">
      <div ref={modalRef} className="cart-modal">
        <div className="cart-header">
          <button onClick={onClose} className="close-btn">
            ✕
          </button>
          <h3>
            {cartItems.length} ITEM{cartItems.length > 1 ? "S" : ""}
          </h3>
        </div>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart-message">Tu carrito está vacío.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>{item.description || "Sin descripción"}</p>
                  <p>S/ {item.price} c/u</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateCartItemQuantity(index, Math.max(1, item.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateCartItemQuantity(index, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <p>
                    <strong>
                      Total: S/ {(item.price * item.quantity).toFixed(2)}
                    </strong>
                  </p>
                  <button
                    className="remove-item-btn"
                    onClick={() => removeItemFromCart(index)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-total">
            <h4>Total: S/ {getTotalPrice().toFixed(2)}</h4>
            <button onClick={handleCreateOrder} className="btn-order">
              Hacer Pedido
            </button>
            <button onClick={clearCart} className="btn-clear-cart">
              Vaciar Carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarritoModal;
