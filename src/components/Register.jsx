import React from "react";
import "../Register.css"; // Asegúrate de crear este archivo CSS

function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Crear cuenta</h2>
        <p>
          ¿Ya tienes una cuenta?{" "}
          <a href="/auth/login" className="login-link">
            Inicia sesión
          </a>
        </p>
        <form>
          <input
            type="text"
            placeholder="Nombre completo"
            className="register-input"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="register-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="register-input"
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="register-input"
          />
          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>
        <a href="/" className="return-link">
          Volver a la tienda
        </a>
      </div>
    </div>
  );
}

export default Register;
