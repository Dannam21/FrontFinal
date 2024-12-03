import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Navbar.css";
import CarritoModal from "../components/CarritoModal";

// Logos
import glow from "../assets/logos/gloww.png";
import lunavie from "../assets/logos/lunavie.png";
import lumiere from "../assets/logos/lumiere.png";

function Navbar() {
  const navigate = useNavigate();
  const [navbarColor, setNavbarColor] = useState("#D4AF37");
  const [bottomBarPosition, setBottomBarPosition] = useState(0);
  const [logoUrl, setLogoUrl] = useState(lumiere);
  const [logoRoute, setLogoRoute] = useState("/Lumiere");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar estado de autenticación y observar cambios en el localStorage
  useEffect(() => {
    const checkAuth = () => {
      const authToken = localStorage.getItem("authToken");
      setIsAuthenticated(!!authToken);
    };

    checkAuth(); // Verifica el estado inicial
    window.addEventListener("storage", checkAuth); // Observa cambios en el localStorage

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const switchTenant = (tenant) => {
    const tenantConfig = {
      Lumiere: { color: "#D4AF37", position: 0, logo: lumiere, route: "/Lumiere" },
      Lunavie: { color: "#87CEEB", position: 1, logo: lunavie, route: "/Lunavie" },
      Glow: { color: "#FFC1CC", position: 2, logo: glow, route: "/Glow" },
    };

    const config = tenantConfig[tenant];
    if (config) {
      setNavbarColor(config.color);
      setBottomBarPosition(config.position);
      setLogoUrl(config.logo);
      setLogoRoute(config.route);
      localStorage.setItem("selectedTenant", tenant);
      navigate(config.route);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/auth/login");
  };

  return (
    <div>
      <div className="top-bar">
        <button onClick={() => switchTenant("Lumiere")} className="top-bar-btn">
          Lumiere
        </button>
        <button onClick={() => switchTenant("Lunavie")} className="top-bar-btn">
          LunaVie
        </button>
        <button onClick={() => switchTenant("Glow")} className="top-bar-btn">
          Glow
        </button>
      </div>

      <div className="bottom-bar-container">
        <div
          className="bottom-bar"
          style={{
            backgroundColor: navbarColor,
            transform: `translateX(${bottomBarPosition * 100}%)`,
          }}
        ></div>
      </div>

      <nav className="navbar" style={{ backgroundColor: navbarColor }}>
        <div className="logo">
          <Link to={logoRoute}>
            <img src={logoUrl} alt="Logo" className="logo-img" />
          </Link>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Buscar producto" />
          <button className="search-icon">&#128269;</button>
        </div>

        <div className="menu-links">
          {!isAuthenticated ? (
            <Link to="/auth/login">Inicia sesión</Link>
          ) : (
            <>
              <Link to="/profile">
                <span>Mi perfil</span>
              </Link>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          )}
          <span className="cart-icon" onClick={toggleCart}>&#128722;</span>
        </div>
      </nav>

      {isCartOpen && <CarritoModal isOpen={isCartOpen} onClose={toggleCart} />}
    </div>
  );
}

export default Navbar;
