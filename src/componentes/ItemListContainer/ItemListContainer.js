import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";
import Taza from "../../assets/taza.jpg";
import Gorra from "../../assets/gorra.jpg";
import Medias from "../../assets/medias.png";
import MousePad from "../../assets/mousepad.png";
import RemeraLogo from "../../assets/remeralogo.jpg";
import BuzoOversize from "../../assets/buzooversize.png";

export const items = [
  {
    id: 1,
    nombre: "remera logo 2G",
    precio: 3500,
    img: RemeraLogo,
  },
  {
    id: 2,
    nombre: "buzo oversize",
    precio: 6000,
    img: BuzoOversize,
  },
  {
    id: 3,
    nombre: "gorra 2G",
    precio: 3200,
    img: Gorra,
  },
  {
    id: 4,
    nombre: "medias 2G",
    precio: 2500,
    img: Medias,
  },
  {
    id: 5,
    nombre: "mousePad XL",
    precio: 4000,
    img: MousePad,
  },
  {
    id: 6,
    nombre: "taza de cafe 2G",
    precio: 2000,
    img: Taza,
  },
];

export function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 0);
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
