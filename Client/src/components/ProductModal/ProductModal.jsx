import React from "react";
import { X } from "lucide-react";
import { useCart } from "context/CartContext";
import styles from "./ProductModal.module.css";

function ProductModal({ product, isOpen, onClose }) {
  const { addToCart, cart, increaseQuantity, decreaseQuantity } = useCart();
  const cartItem = cart.find(item => item.id === product?.id);
  const imgNotFound = "./notFound.jpg";

  if (!isOpen || !product) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X className={styles.closeIcon} />
        </button>
        
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img 
              src={product.img || imgNotFound} 
              alt={product.name}
              className={styles.image}
              onError={(e) => {
                console.log(`Error en modal: ${product.img}`);
                e.target.src = imgNotFound;
              }}
            />
          </div>
          
          <div className={styles.details}>
            <h2 className={styles.name}>{product.name}</h2>
            
            <div className={styles.price}>${product.price}</div>
            
            {product.description && (
              <div className={styles.description}>
                <h3>Descripción</h3>
                <p>{product.description}</p>
              </div>
            )}
            
            {product.ingredients && (
              <div className={styles.ingredients}>
                <h3>Ingredientes</h3>
                <p>{product.ingredients}</p>
              </div>
            )}
            
            <div className={styles.actions}>
              {cartItem ? (
                <div className={styles.quantityControls}>
                  <button 
                    className={styles.quantityBtn}
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  <span className={styles.quantity}>{cartItem.quantity}</span>
                  <button 
                    className={styles.quantityBtn}
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button 
                  className={styles.addToCartBtn} 
                  onClick={() => addToCart(product)}
                >
                  Agregar al Carrito
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;