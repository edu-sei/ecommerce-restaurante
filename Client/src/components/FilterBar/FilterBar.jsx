import React from "react";
import styles from "./FilterBar.module.css";

function FilterBar({ setFiltro }) {
  <div className={styles.filterContainer}>
    {["Todos", "Entradas", "Plato Principal", "Postres", "Bebidas"].map((cat) => (
      <button
        key={cat}
        onClick={() => setFiltro(cat)}
        className={styles.filterButton}
      >
        {cat}
      </button>
    ))}
  </div>
};

export default FilterBar;
