import React from "react";
import { useCart } from "context/CartContext";
import { Link } from "react-router-dom";
import { X, Trash2, ShoppingBag } from "lucide-react";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, isCartOpen, setIsCartOpen } = useCart();
  const subtotal = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const imgNotFound = "./notFound.jpg";

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
  };

  return (
    <div className={styles.overlay} onClick={() => setIsCartOpen(false)}>
      <div className={styles.cartContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <ShoppingBag className={styles.titleIcon} />
            Tu Carrito
          </h2>
          <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>
            <X className={styles.closeIcon} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className={styles.emptyState}>
            <ShoppingBag className={styles.emptyIcon} />
            <p className={styles.emptyText}>Tu carrito está vacío</p>
            <p className={styles.emptySubtext}>Agrega algunos productos deliciosos</p>
          </div>
        ) : (
          <>
            <div className={styles.itemsContainer}>
              {cart.map((item) => (
                <div key={item.id} className={styles.item}>
                  <img 
                    src={item.img || imgNotFound} 
                    alt={item.name} 
                    className={styles.itemImage} 
                  />
                  <div className={styles.itemDetails}>
                    <h4 className={styles.itemName}>{item.name}</h4>
                    <p className={styles.itemPrice}>${item.price}</p>
                    <div className={styles.quantityControls}>
                      <button 
                        className={styles.quantityBtn}
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className={styles.quantity}>{item.quantity}</span>
                      <button 
                        className={styles.quantityBtn}
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.itemActions}>
                    <div className={styles.itemTotal}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(item.id)}
                      title="Eliminar producto"
                    >
                      <Trash2 className={styles.removeIcon} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.summary}>
              <div className={styles.summaryRow}>
                <span>Subtotal:</span>
                <span className={styles.subtotal}>${subtotal.toFixed(2)}</span>
              </div>
              <Link to="/checkout" onClick={handleCheckout}>
                <button className={styles.checkoutBtn}>
                  Proceder al Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
