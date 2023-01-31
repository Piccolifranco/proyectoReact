import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    if (id) {
      const db = getFirestore();
      const itemCollection = collection(db, "items");
      getDocs(itemCollection).then((snapshot) => {
        const items = snapshot.docs.map((doc) => doc.data());
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
