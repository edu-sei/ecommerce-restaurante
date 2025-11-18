import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./FilterBar.module.css";

function FilterBar({ setFilter, categories = [] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();
  const location = useLocation();
  
  const allCategories = [
    { name: "Todos", value: "All" },
    ...categories.map(cat => ({ name: cat.name, value: cat.name }))
  ];

  // Sincronizar con URL al cargar
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setActiveFilter(categoryParam);
    }
  }, [location.search]);

  const handleFilterClick = (filterValue) => {
    setActiveFilter(filterValue);
    setFilter(filterValue);
    // Limpiar URL
    navigate('/menu', { replace: true });
  };

  return (
    <div className={styles.filterContainer}>
      {allCategories.map((category) => (
        <button
          key={category.value}
          onClick={() => handleFilterClick(category.value)}
          className={`${styles.filterButton} ${activeFilter === category.value ? styles.active : ''}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
