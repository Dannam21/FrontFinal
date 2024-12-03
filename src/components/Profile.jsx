import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "Nahia Escalante",
    email: "nahia@example.com",
    password: "********",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = () => {
    setUser(editedUser);
    setIsEditing(false);
    alert("Perfil actualizado exitosamente.");
  };

  const cancelChanges = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
  };

  const deleteAccount = () => {
    if (window.confirm("¿Estás segura de que deseas eliminar tu cuenta?")) {
      alert("Cuenta eliminada exitosamente.");
      navigate("/"); // Redirige al inicio
    }
  };

  const logout = () => {
    // Eliminar el authToken de localStorage
    localStorage.removeItem("authToken");

    // Redirigir al login después de cerrar sesión y recargar la página
    window.location.replace("/auth/login"); // Reemplaza la página actual y redirige al login
  };

  return (
    <div className="profile-container">
      <h1>Mi Perfil</h1>
      <div className="profile-details">
        <div className="profile-section">
          <label>Nombre:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleEditChange}
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>
        <div className="profile-section">
          <label>Correo:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleEditChange}
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>
        <div className="profile-section">
          <label>Contraseña:</label>
          {isEditing ? (
            <input
              type="password"
              name="password"
              value={editedUser.password}
              onChange={handleEditChange}
            />
          ) : (
            <p>{user.password}</p>
          )}
        </div>
      </div>
      <div className="profile-buttons">
        {isEditing ? (
          <>
            <button onClick={saveChanges} className="save-button">
              Guardar cambios
            </button>
            <button onClick={cancelChanges} className="cancel-button">
              Cancelar
            </button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit-button">
            Editar perfil
          </button>
        )}
      </div>
      <div className="profile-actions">
        <button onClick={logout} className="logout-button">
          Cerrar sesión
        </button>
        <button onClick={deleteAccount} className="delete-account-button">
          Eliminar cuenta
        </button>
      </div>
    </div>
  );
};

export default Profile;
