import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSearchResult(data);
      });
  }, []);
  return [products, setProducts, searchResult, setSearchResult];
};

export default useProduct;
