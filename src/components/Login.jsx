import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; 
import "../Login.css"; 

const Login = () => {
  const { tenant_id: urlTenantId } = useParams(); // Obtener tenant_id desde la URL
  const [tenantId, setTenantId] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Verificar primero el tenant_id desde la URL y luego desde localStorage
    const storedTenantId = urlTenantId || localStorage.getItem("selectedTenant");
    if (storedTenantId) {
      setTenantId(storedTenantId);
    } else {
      setError("No se pudo determinar el tenant. Por favor, selecciona una tienda.");
    }
  }, [urlTenantId]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!tenantId) {
      setError("No se puede proceder sin un tenant válido.");
      return;
    }

    if (!email || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    setLoading(true);
    setError(""); // Limpiar errores previos

    const payload = {
      tenant_id: tenantId,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://sqyocw2gzj.execute-api.us-east-1.amazonaws.com/dev/usuarios/login",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      if (response.status === 200) {
        // Guardar token en localStorage
        localStorage.setItem("authToken", data.token);
        // Recargar la página y redirigir al home
        window.location.replace("/"); // Reemplaza la página actual y redirige al home
      } else {
        setError(data.error || "Error al iniciar sesión. Verifique sus credenciales.");
      }
    } catch (err) {
      console.error("Error durante el inicio de sesión:", err);
      setError("Hubo un problema al conectarse con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Inicio de sesión</h2>
      <p>
        ¿Todavía no tiene una cuenta?{" "}
        <a href="/register" className="create-account-link">
          Crear cuenta
        </a>
      </p>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="/forgot-password" className="forgot-password-link">
          ¿Olvidaste tu contraseña?
        </a>
        <div className="login-actions">
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Cargando..." : "Iniciar sesión"}
          </button>
          <a href="/" className="back-to-store-link">
            Volver a la tienda
          </a>
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
