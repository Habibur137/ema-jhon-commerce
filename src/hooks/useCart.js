import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
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
  return [cart, setCart];
};

export default useCart;
