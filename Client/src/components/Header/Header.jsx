import React, { useState } from "react";
import { ShoppingCart, User, LogOut, Menu, X } from "lucide-react";
import { useCart } from "context/CartContext";
import { useAuth } from "context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const { cart, setIsCartOpen } = useCart();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Menú", path: "/menu" }
  ];

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Sabores Urbanos</Link>
      
      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        {navItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path} 
            className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Right Section */}
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

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={styles.icon} /> : <Menu className={styles.icon} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`${styles.mobileNavLink} ${location.pathname === item.path ? styles.active : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
