import React, { useState, useEffect } from "react";
import { getItems } from "../ItemListContainer/ItemListContainer";

const ItemDetailContainer = ({ id }) => {
  const itemDetailed = getItems().then((response) => {
    return response.find((item) => item.id === id);
  });

  return <div>ItemDetailContainer</div>;
};

export default ItemDetailContainer;
