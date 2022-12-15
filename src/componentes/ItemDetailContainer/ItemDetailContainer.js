import React, { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => setProducts([1, 2, 3, 4]), 2000);
    }).then((res) => setProducts(res));
  }, [products]);

  return <div>ItemDetailContainer</div>;
};

export default ItemDetailContainer;
