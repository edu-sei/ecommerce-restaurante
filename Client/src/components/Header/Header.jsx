import React from "react";

import { ShoppingCart, User, LogOut } from "lucide-react";
import { useCart } from "context/CartContext";
import { useAuth } from "context/AuthContext";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const { cart, setIsCartOpen } = useCart();
  const { user, logout } = useAuth();
  const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Sabores Urbanos</Link>
      <div className={styles.rightSection}>
        {user ? (
          <div className={styles.userSection}>
            <span className={styles.userName}>Hola, {user.name}</span>
            <button onClick={logout} className={styles.logoutBtn}>
              <LogOut className={styles.icon} />
            </button>
          </div>
        ) : (
          <Link to="/login" className={styles.loginBtn}>
            <User className={styles.icon} />
          </Link>
        )}
        <button onClick={() => setIsCartOpen(true)} className={styles.cartContainer}>
          <ShoppingCart className={styles.icon} />
          {totalItems > 0 && (
            <span className={styles.badge}>{totalItems}</span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
