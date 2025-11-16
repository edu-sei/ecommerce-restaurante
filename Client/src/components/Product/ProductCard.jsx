import React from "react";
import { useCart } from "context/CartContext";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const { addToCart, cart, increaseQuantity, decreaseQuantity } = useCart();
  const cartItem = cart.find(item => item.id === product.id);
  const imgNotFound = "./notFound.jpg";
  return (
    <div className={styles.card}>
      <img src={product.img || imgNotFound } className={styles.image} />
      <div className={styles.info}>
        <h4 className={styles.name}>{product.name}</h4>
        <p className={styles.price}>${product.price}</p>
        {cartItem ? (
          <div className={styles.quantityControls}>
            <button onClick={() => decreaseQuantity(product.id)}>-</button>
            <span>{cartItem.quantity}</span>
            <button onClick={() => increaseQuantity(product.id)}>+</button>
          </div>
        ) : (
          <button className={styles.button} onClick={() => addToCart(product)}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
