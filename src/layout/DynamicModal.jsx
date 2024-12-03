import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../DynamicModal.css";

function DynamicModal() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Rostro", route: "/categoria/rostro" },
    { name: "Ojos", route: "/categoria/ojos" },
    { name: "Labios", route: "/categoria/labios" },
    { name: "Cejas y pestañas", route: "/categoria/cejas-y-pestanas" },
  ];

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="dynamic-modal">
      {/* Barra de Navegación */}
      <nav className="dynamic-menu">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="menu-item"
            onClick={() => handleNavigation(item.route)}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default DynamicModal;
