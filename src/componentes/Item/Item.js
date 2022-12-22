import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/item/${item.id}`);
  };
  return (
    <div onClick={handleClick}>
      <img src={item.img} alt="item" />
      <h5>{item.nombre}</h5>
      <p>Precio: ${item.precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Item;
