import React from "react";

const ItemCount = ({ onAdd, onDelete, count }) => {
  return (
    <div>
      <button onClick={onAdd}> Agregar al carrito </button>
      <button disabled={count <= 0} onClick={onDelete}>
        Eliminar del carrito
      </button>
    </div>
  );
};

export default ItemCount;
