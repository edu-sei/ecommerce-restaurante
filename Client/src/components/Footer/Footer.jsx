import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Sabores Urbanos</h3>
          <p className={styles.description}>
            Comida artesanal y delivery rápido. 
            Sabores auténticos que llegan a tu mesa.
          </p>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Navegación</h4>
          <div className={styles.links}>
            <Link to="/" className={styles.link}>Inicio</Link>
            <Link to="/menu" className={styles.link}>Menú</Link>
            <Link to="/cart" className={styles.link}>Carrito</Link>
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Contacto</h4>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <MapPin className={styles.icon} />
              <span>Av. Principal 123, Ciudad</span>
            </div>
            <div className={styles.contactItem}>
              <Phone className={styles.icon} />
              <span>+54 11 1234-5678</span>
            </div>
            <div className={styles.contactItem}>
              <Mail className={styles.icon} />
              <span>info@saboresurbanos.com</span>
            </div>
            <div className={styles.contactItem}>
              <Clock className={styles.icon} />
              <span>Lun-Dom: 11:00 - 23:00</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Sabores Urbanos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
