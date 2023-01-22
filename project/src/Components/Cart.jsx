import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveCartItem = (itemIndex) => {
    const newCartItems = cartItems.filter((item, index) => index !== itemIndex);
    setCartItems(newCartItems);
  };

  const handlePlaceOrder = () => {
    alert("Order has been placed");
  };

  return (
    <div>
      <Grid container spacing={3}>
        {cartItems.map((item, index) => (
          <Grid item xs={4} key={item.name}>
            <div className="cart-item">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <h4>$ {item.price}</h4>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleRemoveCartItem(index)}
              >
                Remove
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>
      <div className="place-order-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={handlePlaceOrder}
          disabled={cartItems.length === 0}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Cart;
