import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import useProduct from "../../hooks/useProduct";
import useCart from "../../hooks/useCart";

const Shop = () => {
  const [products, setproducts, searchResult, setSearchResult] = useProduct();
  const [cart, setCart] = useCart(products);

  // useEffect(() => {
  //   let newCart = [];
  //   const cart = getStoredCart();
  //   for (const key in cart) {
  //     const findInLocalStorage = products.find((product) => product.id == key);
  //     if (findInLocalStorage) {
  //       const quantity = cart[key];
  //       findInLocalStorage.quantity = quantity;
  //       newCart.push(findInLocalStorage);
  //     }
  //   }
  //   setCart(newCart);
  // }, [products]);

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

  const handleSearch = (event) => {
    let searchText = event.target.value;
    const allFindResult = products.filter((product) =>
      product.name.toLowerCase().includes(searchText)
    );
    setSearchResult(allFindResult);
  };
  return (
    <div>
      <div className="text-center">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search....."
          className="w-50 mt-6 shadow-2xl outline-none border px-2 py-1"
        />
      </div>
      <div className="md:flex md:flex-row gap-4 md:px-24 pt-8 relative z-0">
        {/* product div  */}
        <div className="basis-9/12 border bg-slate-200">
          {/* all product  */}
          <div className="grid grid-cols-1 md:grid md:grid-cols-4 gap-4">
            {searchResult.map((product) => (
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
    </div>
  );
};

export default Shop;
