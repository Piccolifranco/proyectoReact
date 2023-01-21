import React from "react";
import { CartContext } from "../../App";
import { CarritoListItem } from "../CarritoListItem/CarritoListItem";

export const CarritoList = () => {
  const { value } = React.useContext(CartContext);
  return (
    <div>
      {value.length ? (
        <>
          {value.map((item) => (
            <>
              <CarritoListItem key={item.id} item={item} />
            </>
          ))}{" "}
          <h2>
            Precio total:{" $"}
            {value.reduce((acc, item) => acc + item.quantity * item.precio, 0)}
          </h2>
        </>
      ) : (
        <h2>No hay items en el carrito, agrega mas busca</h2>
      )}
    </div>
  );
};
