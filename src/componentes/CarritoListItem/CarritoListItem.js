import React from "react";
import { CartContext } from "../../App";

export const CarritoListItem = ({ item }) => {
  const { removeItem, addItem } = React.useContext(CartContext);
  const removeItemById = () => {
    removeItem(item.id);
  };
  const addItemById = () => {
    addItem(item.id);
  };
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        gap: 20,
      }}
    >
      <img height={200} width={200} src={item.img} alt={item.nombre}></img>
      <div>
        <h1>{item.nombre}</h1>

        <h3> Cantidad: {item.quantity}</h3>
        <h3> Precio: {item.quantity * item.precio}</h3>

        <button disabled={item.quantity <= 0} onClick={removeItemById}>
          -
        </button>
        <button onClick={addItemById}>+</button>
      </div>
    </div>
  );
};
