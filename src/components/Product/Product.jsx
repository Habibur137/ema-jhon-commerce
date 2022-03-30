import React from "react";

const Product = ({ product, handleAddToCart }) => {
  const { img, name, seller, price, ratings } = product;
  return (
    <div className="p-2 bg-white relative text-slate-500 hover:shadow-xl">
      <img src={img} alt="" />
      <p>{name}</p>
      <p>$ {price}</p>
      <p>Ratings:{ratings}</p>
      <p className="mb-10">
        <small>Seller: {seller}</small>
      </p>
      <div className="flex justify-between">
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-slate-100 text-cyan-800 hover:text-yellow-500 px-2 py-2  absolute bottom-0 left-0 rounded-tr-md"
        >
          Add To Cart
        </button>
        <button className="bg-slate-100 text-cyan-800 hover:text-yellow-500 px-2 py-2  absolute bottom-0 right-0 rounded-tl-md">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
