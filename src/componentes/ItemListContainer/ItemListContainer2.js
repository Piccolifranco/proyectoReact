import React, { useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase";

export const ItemListContainer2 = () => {
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    getDocs(itemCollection).then((snapshot) => {
      const items = snapshot.docs.map((doc) => doc.data());
      console.log(items);
    });
  }, []);

  return <div> ItemListContainer</div>;
};

export default ItemListContainer2;
