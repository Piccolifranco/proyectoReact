import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItems } from "../ItemListContainer/ItemListContainer";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    if (id) {
      getItems().then((items) => {
        const foundItem = items.find((item) => {
          return item.id.toString() === id;
        });
        setItem(foundItem);
      });
    }
  }, [id]);

  return <ItemDetail itemDetailed={item} />;
};

export default ItemDetailContainer;
