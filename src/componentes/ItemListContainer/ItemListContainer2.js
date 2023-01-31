import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

export const ItemListContainer2 = () => {
  const [itemList, setItemList] = useState([]);
  const [filter, setFilter] = useState("clothes");
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    const q = query(itemCollection, where("category", "==", filter));
    getDocs(q).then((snapshot) => {
      const items = snapshot.docs.map((doc) => doc.data());
      setItemList(items);
    });
  }, [filter]);

  const filterOnChangeHandler = (ev) => {
    setFilter(ev.target.value);
  };

  return (
    <>
      <select onChange={filterOnChangeHandler}>
        <option value="clothes">clothes</option>
        <option value="merchandising">merchandising</option>
      </select>
      <ItemList items={itemList} />;
    </>
  );
};

export default ItemListContainer2;
