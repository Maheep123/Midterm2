import React from 'react';
import { useCart } from '../context/CartContext';

function CartItem({ item, removeFromCart }) {
  const { updateQuantity } = useCart();

  return (
    <div>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>${item.price}</p>
      <input
        type="number"
        value={item.quantity || 1}
        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
      />
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
