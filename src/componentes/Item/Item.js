import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/item/${item.id}`);
  };
  return (
    <>
      <div onClick={handleClick}>
        <img
          style={{ objectFit: "contain" }}
          width={200}
          height={200}
          src={item.img}
          alt="item"
        />
        <h5>{item.nombre}</h5>
        <p>Precio: ${item.precio}</p>
      </div>
    </>
  );
};

export default Item;
