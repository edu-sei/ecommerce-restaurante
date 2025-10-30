import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <Link to="/" className={`${styles.link} ${styles.active}`}>
          <span className="material-symbols-outlined">logito</span>
          <span className={styles.text}>Home</span>
        </Link>

        <Link to="/menu" className={styles.link}>
          <span className="material-symbols-outlined">logito</span>
          <span className={styles.text}>Menú</span>
        </Link>

        <Link to="/orders" className={styles.link}>
          <span className="material-symbols-outlined">logito</span>
          <span className={styles.text}>Pedidos</span>
        </Link>

        <Link to="/profile" className={styles.link}>
          <span className="material-symbols-outlined">logito</span>
          <span className={styles.text}>Perfil</span>
        </Link>
      </nav>
    </footer>
    </>
  );
};

export default Footer;
