import React from "react";
import { useCart } from "../../Context/CartContext";
import styles from "./Checkout.module.css";

function Checkout()  {
  const { cart } = useCart();
  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div className={styles.container}>
      <h2>Order Summary</h2>
      <ul className={styles.list}>
        {cart.map((p) => (
          <li key={p.id}>
            {p.name} x {p.quantity} — ${p.price * p.quantity}
          </li>
        ))}
      </ul>
      <p className={styles.total}>Total: ${total}</p>
      <button className={styles.btn}>Confirm order</button>
    </div>
  );
};

export default Checkout;
