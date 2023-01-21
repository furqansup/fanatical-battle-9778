import React from "react";

function Delivery() {
  return (
    <div className="delivery">
      <h2>Delivery Details</h2>
      <form className="delivery-form">
        <div className="form-inputs">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="form-inputs">
          <label>Address</label>
          <input type="text" />
        </div>
        <div className="form-inputs">
          <label>Phone</label>
          <input type="number" />
        </div>
        <button>Place Order</button>
      </form>
    </div>
  );
}

export default Delivery;