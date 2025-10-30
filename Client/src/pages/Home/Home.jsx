import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/Product/ProductCard";
import FilterBar from "../../components/FilterBar/FilterBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";

const products = [
  { id: 1, name: "Empanadas", price: 1500, category: "Starters", img: "" },
  { id: 2, name: "Steak", price: 6500, category: "Main Course", img: "" },
  { id: 3, name: "Flan", price: 2000, category: "Desserts", img: "" },
  { id: 4, name: "Lemonade", price: 1200, category: "Drinks", img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f" },
];

function Home() {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <>
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
    </>
  );
};

export default Home;
