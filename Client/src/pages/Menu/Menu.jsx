import React, { useState } from "react";
import Header from "../../components/Header/Header";
import FilterBar from "../../components/FilterBar/FilterBar";
import ProductCard from "../../components/Product/ProductCard";
import Footer from "../../components/Footer/Footer";
import styles from "./Menu.module.css";

function Menu() {
  const [filter, setFilter] = useState("All");
  const [order, setOrder] = useState("asc");

  const products = [
    {
      id: 1,
      name: "Empanadas",
      price: 1500,
      category: "Starters",
      img: "https://images.unsplash.com/photo-1617196037214-8a7973bca2c1",
    },
    {
      id: 2,
      name: "Steak",
      price: 6500,
      category: "Main Course",
      img: "https://images.unsplash.com/photo-1604909053194-4c2f2b1d5b05",
    },
    {
      id: 3,
      name: "Flan",
      price: 2000,
      category: "Desserts",
      img: "https://images.unsplash.com/photo-1576618148400-f54bed99fc71",
    },
    {
      id: 4,
      name: "Lemonade",
      price: 1200,
      category: "Drinks",
      img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    },
    {
      id: 5,
      name: "Pasta Alfredo",
      price: 4800,
      category: "Main Course",
      img: "https://images.unsplash.com/photo-1625943554630-d0a7f7f92a5e",
    },
  ];

  // Apply filter
  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  // Apply price ordering
  const orderedProducts = [...filteredProducts].sort((a, b) =>
    order === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div className={styles.menuContainer}>
      <Header />

      <div className={styles.controls}>
        <FilterBar setFilter={setFilter} />
        <select
          className={styles.select}
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="asc">Price: low to high</option>
          <option value="desc">Price: high to low</option>
        </select>
      </div>

      <div className={styles.gridProducts}>
        {orderedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
