import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  useEffect(() => {
    let newCart = [];
    const cart = getStoredCart();
    for (const key in cart) {
      const findInLocalStorage = products.find((product) => product.id == key);
      if (findInLocalStorage) {
        const quantity = cart[key];
        findInLocalStorage.quantity = quantity;
        newCart.push(findInLocalStorage);
      }
    }
    setCart(newCart);
  }, [products]);

  const handleAddToCart = (product) => {
    const exist = cart.find((pr) => pr.id == product.id);
    let newCart;
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((pr) => pr.id != product.id);
      product.quantity += 1;
      newCart = [...rest, product];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="md:flex md:flex-row gap-4 md:px-24 pt-8 relative z-0">
      {/* product div  */}
      <div className="basis-9/12 border bg-slate-200">
        {/* all product  */}
        <div className="grid grid-cols-1 md:grid md:grid-cols-4 gap-4">
          {products.map((product) => (
            <Product
              handleAddToCart={handleAddToCart}
              product={product}
              key={product.id}
            />
          ))}
        </div>
      </div>
      {/* cart div  */}
      <div className="basis-3/12 md:sticky top-0 bg-amber-300 p-2">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
