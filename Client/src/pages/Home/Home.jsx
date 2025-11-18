import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "components/Header/Header";
import ProductCard from "components/Product/ProductCard";
import Footer from "components/Footer/Footer";
import api from "api/api";
import styles from "pages/Home/Home.module.css";

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Cargar productos
    api.get("/Products")
      .then((res) => {
        setFeaturedProducts(res.data.slice(0, 4));
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
      });

    // Cargar categorías
    api.get("/Category")
      .then((res) => {
        console.log("Categorías cargadas:", res.data);
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Error al cargar categorías:", err);
        console.error("Detalles:", err.response?.data);
      });
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Header />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Sabores Urbanos</h1>
          <p className={styles.heroSubtitle}>Comida artesanal y delivery rápido</p>
          <Link to="/menu" className={styles.heroButton}>Ver Menú</Link>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.heroImagePlaceholder}>🍽️</div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categoriesSection}>
        <h2 className={styles.sectionTitle}>Nuestras Categorías</h2>
        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/menu?category=${category.name}`} 
              className={styles.categoryCard}
            >
              <div className={styles.categoryIcon}>{category.img || '🍽️'}</div>
              <h3 className={styles.categoryName}>{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Productos Recomendados</h2>
        <div className={styles.featuredGrid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
