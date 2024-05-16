// Cart.js
import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="container mt-5">
      <h2>Cart Items</h2>
      <ul className="list-group">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name} - ${item.price}
            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
