import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products, setproducts] = useProduct();
  const [cart, setCart] = useCart(products);
  //   item remove from cart pass by props
  const removeHandle = (pd) => {
    const cartProduct = cart.filter((product) => product.id != pd.id);
    setCart(cartProduct);
    removeFromDb(pd.id);
  };
  return (
    <div className="md:flex md:flex-row gap-4 md:px-24">
      <div className="basis-9/12 border bg-slate-200">
        <div>
          {cart.map((product) => (
            <ReviewItem
              product={product}
              key={product.id}
              removeHandle={removeHandle}
            ></ReviewItem>
          ))}
        </div>
      </div>
      <div className="basis-3/12 md:sticky top-0 bg-amber-300 p-2">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
