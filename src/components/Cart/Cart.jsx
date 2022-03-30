import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="text-white">
      <h1 className="text-3xl">Order Summary</h1>
      <h3 className="text-2xl">
        Item Ordered: <span className="text-emerald-600">{cart.length}</span>
      </h3>
    </div>
  );
};

export default Cart;
