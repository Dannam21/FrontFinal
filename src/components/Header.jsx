import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirigir al inicio después de cerrar sesión
  };

  return (
    <div className="header">
      {user ? (
        <div className="user-actions">
          <button onClick={() => navigate("/profile")}>Mi perfil</button>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div className="login-actions">
          <button onClick={() => navigate("/login")}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
};

export default Header;
