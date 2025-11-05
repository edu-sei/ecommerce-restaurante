import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Sabores Urbanos</Link>
      <Link to="/cart" className={styles.cartContainer}>
        <ShoppingCart className={styles.icon} />
        {totalItems > 0 && (
          <span className={styles.badge}>{totalItems}</span>
        )}
      </Link>
    </header>
  );
};

export default Header;
