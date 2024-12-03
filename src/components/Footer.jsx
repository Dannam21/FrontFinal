import React from "react";
import "../Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección Explora */}
        <div className="footer-section">
          <h3>Explora</h3>
          <ul>
            <li>
              <a href="#">Búsqueda</a>
            </li>
            <li>
              <a href="#">Conócenos</a>
            </li>
            <li>
              <a href="#">Pedidos Personalizados</a>
            </li>
            <li>
              <a href="#">Devoluciones</a>
            </li>
            <li>
              <a href="#">Política de privacidad</a>
            </li>
           
            <li>
              <a href="#">Términos del servicio</a>
            </li>
          </ul>
        </div>

        {/* Sección Envíos */}
        <div className="footer-section">
          <h3>Envíos</h3>
          <ul>
            <li>
              <a href="#">Tiempos de Entrega y más.</a>
            </li>
          </ul>
        </div>

        {/* Sección FAQ */}
        <div className="footer-section">
          <h3>FAQ</h3>
          <ul>
            <li>
              <a href="#">Las respuestas a tus preguntas frecuentes</a>
            </li>
          </ul>
        </div>

      </div>
      <p className="footer-bottom">
        © 2024, BeautyCorp. Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
