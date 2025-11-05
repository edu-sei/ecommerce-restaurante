import React, { useState, useEffect } from "react";
import Header from "components/Header/Header";
import ProductCard from "components/Product/ProductCard";
import FilterBar from "components/FilterBar/FilterBar";
import Footer from "components/Footer/Footer";
import styles from "pages/Home/Home.module.css";
import api from "api/api"; 

function Home() {
  const [products, setProducts] = useState([]); 
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    api.get("/Products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
      });
  }, []);

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);


  return (
    <div className={styles.homeContainer}>
      <Header />
      <FilterBar setFilter={setFilter} />
      <div className={styles.gridProducts}>
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
