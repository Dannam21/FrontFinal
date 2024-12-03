import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import DetalleProducto from "./pages/DetalleProducto";
import CategoriaPage from "./pages/CategoriaPage";
import Profile from "./components/Profile";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./AuthContext"; // Asegúrate de que la ruta sea correcta
import "./styles.css";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id" element={<DetalleProducto />} />
            <Route path="/categoria/:category" element={<CategoriaPage />} />
            <Route path="/profile" element={<Profile />} />
            {/* Redireccionar rutas no válidas */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
