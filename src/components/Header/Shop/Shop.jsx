import React, { useEffect, useState } from "react";
import Product from "../../Product/Product";

const Shop = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  return (
    <div className="md:flex md:flex-row gap-4 md:px-24">
      {/* product div  */}
      <div className="basis-9/12 border bg-slate-100">
        {/* all product  */}
        <div>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
      {/* cart div  */}
      <div className="basis-3/12">
        <h1 className="border">dfjsdjljli</h1>
      </div>
    </div>
  );
};

export default Shop;
