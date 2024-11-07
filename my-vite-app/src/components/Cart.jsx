import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <div className="cart-container">
      <h1 className="cart-header">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-item-list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
          </div>
          <p className="cart-total">Total: ${cartTotal()}</p>
          <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
}

export default Cart;
