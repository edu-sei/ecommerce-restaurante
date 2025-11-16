import React from "react";
import { useCart } from "context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, isCartOpen, setIsCartOpen } = useCart();
  const subtotal = cart.reduce(
    (acc, p) => acc + p.price * p.quantity,
    0
  );

  if (!isCartOpen) return null;

  return (
    <div className={styles.overlay} onClick={() => setIsCartOpen(false)}>
      <div className={styles.cartContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>×</button>
      <h2 className={styles.title}>Your Cart</h2>
      {cart.length === 0 ? (
        <p className={styles.empty}>Your cart is empty</p>
      ) : (
        <>
          <ul className={styles.list}>
            {cart.map((item) => (
              <li key={item.id} className={styles.item}>
                <img src={item.img} alt={item.name} className={styles.img} />
                <div>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <div className={styles.quantityControls}>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.totalBox}>
            <p>Subtotal: ${subtotal}</p>
            <Link to="/checkout">
              <button className={styles.checkoutBtn}>Checkout</button>
            </Link>
          </div>
        </>
      )}
      </div>
    </div>
  );
};

export default Cart;
