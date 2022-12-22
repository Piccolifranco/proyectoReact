import React from "react";
import { items } from "../ItemListContainer/ItemListContainer";

const ItemCount = ({ onAdd, value }) => {
  const onAddhandler = () => {
    const itemCounter = items.reduce((id, items) => id + 1, 0);
  };

  return (
    <div>
      <button onAdd={onAddhandler}> Items en el carrito: {itemCounter}</button>
    </div>
  );
};

export default ItemCount;
