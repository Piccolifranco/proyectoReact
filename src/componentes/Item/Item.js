import React from "react";

const Item = ({ item }) => {
  return (
    <div>
      {item.img}
      <h5>{item.nombre}</h5>
      <p>Precio: ${item.precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Item;
