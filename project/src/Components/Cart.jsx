import React from "react";


function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.title} />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <button onClick={() => removeFromCart(item.id)}>
                Remove From Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;