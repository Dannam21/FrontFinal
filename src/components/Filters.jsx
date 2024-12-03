import React from "react";
import "../Filters.css";

const Filters = () => {
  return (
    <div className="filters">
      <h3>Filtros</h3>
      <div className="filter-group">
        <h4>Disponibilidad</h4>
        <label>
          <input type="checkbox" />
          En existencia
        </label>
        <label>
          <input type="checkbox" />
          Agotado
        </label>
      </div>
      <div className="filter-group">
        <h4>Precio</h4>
        <input type="range" min="0" max="1000" />
        <p>Precio: S/. 0 - S/. 1000</p>
      </div>
      <div className="filter-group">
        <h4>Marca</h4>
        <label>
          <input type="checkbox" />
          The Ordinary
        </label>
        <label>
          <input type="checkbox" />
          Rare Beauty
        </label>
        <label>
          <input type="checkbox" />
          Fenty Beauty
        </label>
      </div>
    </div>
  );
};

export default Filters;
