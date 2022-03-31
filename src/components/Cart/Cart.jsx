import React from "react";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity += product.quantity;
    total += product.price;
    shipping += product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const GrandTotal = total + shipping + tax;
  return (
    <div className="text-gray-500 md:sticky top-0">
      <h1 className="text-3xl mt-10">Order Summary</h1>
      <h3 className="text-2xl mb-3 mt-8">
        Item Ordered: <span className="text-emerald-600">{quantity}</span>
      </h3>
      <h3 className="mb-2">
        Total:<span className="text-emerald-600"> ${total}</span>
      </h3>
      <h3 className="mb-2">
        Shipping:<span className="text-emerald-600"> ${shipping}</span>
      </h3>
      <h3 className="mb-2">
        Tax:<span className="text-emerald-600"> ${tax}</span>
      </h3>
      <hr className="w-28" />
      <h3>
        Pay To:<span className="text-emerald-600"> ${GrandTotal}</span>
      </h3>
    </div>
  );
};

export default Cart;
