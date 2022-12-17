import React from "react";
import Item from "../Item/Item";

const ItemDetailed = ({ item }) => {
  return (
    <div>
      <img src={item.img} alt="item" />
      <h5>{item.nombre}</h5>
      <p>Precio: ${item.precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailed;
