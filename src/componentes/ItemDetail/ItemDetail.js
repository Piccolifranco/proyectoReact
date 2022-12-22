import React from "react";
import ItemCount from "../Item/ItemCount";

function ItemDetail({ itemDetailed }) {
  console.log(itemDetailed);
  return (
    <div>
      {itemDetailed && (
        <>
          <img src={itemDetailed.img} alt="item" />
          <h5>{itemDetailed.nombre}</h5>
          <p>Precio: ${itemDetailed.precio}</p>
          <button>Agregar al carrito</button>
          <ItemCount />
        </>
      )}
    </div>
  );
}

export default ItemDetail;
