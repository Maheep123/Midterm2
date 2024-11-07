import React from 'react';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cart, cartTotal } = useCart();

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <>
          <div className="checkout-item-list">
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={item.image} alt={item.title} />
                <div className="checkout-item-info">
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <p>Total: ${cartTotal()}</p>
            <button className="checkout-btn">Proceed with Payment</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
