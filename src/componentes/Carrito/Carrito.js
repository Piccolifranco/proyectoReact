import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import "./carrito.css";

const Carrito = ({ src, alt }) => {
  const { value, clearCarrito } = React.useContext(CartContext);
  const totalQuantity = value.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="carrito">
      {value.length > 0 ? (
        <>
          <div onClick={clearCarrito}>Vaciar el carrito</div>
          <h3>{totalQuantity}</h3>
          <Link to="/Carrito">
            <img src={src} alt={alt} />
          </Link>{" "}
        </>
      ) : null}
    </div>
  );
};

export default Carrito;
