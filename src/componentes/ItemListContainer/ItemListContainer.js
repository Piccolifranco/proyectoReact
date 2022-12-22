import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";

export const items = [
  {
    id: 1,
    nombre: "remera logo 2G",
    precio: 3500,
    img: "../../../assets/remeralogo.jpg",
  },
  {
    id: 2,
    nombre: "buzo oversize",
    precio: 6000,
    img: "../images/buzooversize.png",
  },
  {
    id: 3,
    nombre: "gorra 2G",
    precio: 3200,
    img: "../images/gorra.jpg",
  },
  {
    id: 4,
    nombre: "medias 2G",
    precio: 2500,
    img: "../images/medias.png",
  },
  {
    id: 5,
    nombre: "mousePad XL",
    precio: 4000,
    img: "../images/mousepad.png",
  },
  {
    id: 6,
    nombre: "taza de cafe 2G",
    precio: 2000,
    img: "../images/taza.jpg",
  },
];

export function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
}

const ItemListContainer = () => {
  const [itemList, setItemList] = useState([]);

  getItems().then((response) => {
    setItemList(response);
  });
  return <ItemList items={itemList} />;
};

export default ItemListContainer;
