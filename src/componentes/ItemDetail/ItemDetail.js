import React, { useState } from "react";
import { CartContext } from "../../App";
import ItemCount from "../Item/ItemCount";

function ItemDetail({ itemDetailed }) {
  const [count, setCount] = useState(0);
  const { setValue } = React.useContext(CartContext);
  const onAddItem = () => {
    setCount((prev) => prev + 1);
  };
  const onDeleteItem = () => {
    setCount((prev) => prev - 1);
  };

  const onComprar = () => {
    console.log("comprando");
    setValue({
      ...itemDetailed,
      quantity: count,
    });
  };

  return (
    <div>
      {itemDetailed && (
        <>
          <img src={itemDetailed.img} alt="item" />
          <h1>{itemDetailed.nombre}</h1>
          <h3>Cantidad: {count}</h3>
          <p>Precio: ${itemDetailed.precio}</p>
          <ItemCount count={count} onDelete={onDeleteItem} onAdd={onAddItem} />
          <button disabled={count <= 0} onClick={onComprar}>
            Comprar
          </button>
        </>
      )}
    </div>
  );
}

export default ItemDetail;
