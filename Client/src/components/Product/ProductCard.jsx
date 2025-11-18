import React from "react";
import { useCart } from "context/CartContext";
import styles from "./ProductCard.module.css";

function ProductCard({ product, onCardClick }) {
  const { addToCart, cart, increaseQuantity, decreaseQuantity } = useCart();
  const cartItem = cart.find(item => item.id === product.id);
  const imgNotFound = "./notFound.jpg";

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(product);
    }
  };

  const handleButtonClick = (e, action) => {
    e.stopPropagation();
    action();
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.imageContainer}>
        <img 
          src={product.img || imgNotFound} 
          className={styles.image} 
          alt={product.name}
          onError={(e) => {
            console.log(`Error cargando imagen: ${product.img}`);
            e.target.src = imgNotFound;
          }}
          onLoad={() => console.log(`Imagen cargada: ${product.img}`)}
        />
        <div className={styles.overlay}>
          <span className={styles.viewDetails}>Ver detalles</span>
        </div>
      </div>
      <div className={styles.info}>
        <h4 className={styles.name}>{product.name}</h4>
        <p className={styles.price}>${product.price}</p>
        {product.category_name && (
          <span className={styles.category}>{product.category_name}</span>
        )}
        <div className={styles.actions}>
          {cartItem ? (
            <div className={styles.quantityControls}>
              <button 
                className={styles.quantityBtn}
                onClick={(e) => handleButtonClick(e, () => decreaseQuantity(product.id))}
              >
                -
              </button>
              <span className={styles.quantity}>{cartItem.quantity}</span>
              <button 
                className={styles.quantityBtn}
                onClick={(e) => handleButtonClick(e, () => increaseQuantity(product.id))}
              >
                +
              </button>
            </div>
          ) : (
            <button 
              className={styles.addButton} 
              onClick={(e) => handleButtonClick(e, () => addToCart(product))}
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
