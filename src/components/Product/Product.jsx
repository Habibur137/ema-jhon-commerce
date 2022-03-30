import React from "react";

const Product = ({ product }) => {
  const { img, name, seller, price, ratings } = product;
  console.log(product);
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default Product;
