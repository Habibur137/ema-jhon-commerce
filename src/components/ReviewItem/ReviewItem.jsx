import React from "react";

const ReviewItem = ({ product, removeHandle }) => {
  const { name, price, seller, img, quantity } = product;
  return (
    <div className="flex border mb-4 border-orange-400 w-3/5">
      <div>
        <img className="w-24" src={img} alt="" />
      </div>
      <div className="flex">
        <div>
          <p>{name}</p>
          <p>${price}</p>
          <p>
            <small>{quantity}</small>
          </p>
        </div>
        <button onClick={() => removeHandle(product)}>remove</button>
      </div>
    </div>
  );
};

export default ReviewItem;
