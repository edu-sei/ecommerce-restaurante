import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "components/Header/Header";
import ProductCard from "components/Product/ProductCard";
import ProductModal from "components/ProductModal/ProductModal";
import FilterBar from "components/FilterBar/FilterBar";
import Footer from "components/Footer/Footer";
import styles from "pages/Menu/Menu.module.css";
import api from "api/api"; 

function Menu() {
  const location = useLocation();
  const [products, setProducts] = useState([]); 
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Obtener categoría de la URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setFilter(categoryParam);
    }
  }, [location.search]);

  useEffect(() => {
    // Cargar productos
    api.get("/Products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
      });

    // Cargar categorías
    api.get("/Category")
      .then((res) => {
        console.log("Categorías en Menu:", res.data);
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Error al cargar categorías:", err);
        console.error("Detalles:", err.response?.data);
      });
  }, []);

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => {
          console.log(`Comparando: producto.category_name="${p.category_name}" con filter="${filter}"`); 
          return p.category_name === filter;
        });

  console.log(`Filter actual: "${filter}", Productos filtrados:`, filteredProducts.length);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className={styles.menuContainer}>
      <Header />
      
      <div className={styles.menuContent}>
        <div className={styles.menuHeader}>
          <h1 className={styles.menuTitle}>Nuestro Menú</h1>
          <p className={styles.menuSubtitle}>Descubre nuestros deliciosos platos</p>
        </div>
        
        <FilterBar setFilter={setFilter} categories={categories} />
        
        <div className={styles.gridProducts}>
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onCardClick={handleProductClick}
            />
          ))}
        </div>
      </div>
      
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      
      <Footer />
    </div>
  );
};

export default Menu;
