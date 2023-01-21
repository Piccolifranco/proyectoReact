import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./componentes/Navbar/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CarritoList } from "./componentes/CarritoList/CarritoList";

export const CartContext = React.createContext();

function App() {
  const [carrito, setCarrito] = useState([]);
  const setCartContext = (itemToAdd) => {
    let index = carrito.findIndex((item) => item.id === itemToAdd.id);
    // si el producto ya existe en el array
    if (index !== -1) {
      let newCarrito = [...carrito];
      newCarrito[index].quantity += itemToAdd.quantity;
      setCarrito(newCarrito);
    } else {
      setCarrito([...carrito, itemToAdd]);
    }
  };

  const clearCarrito = () => {
    setCarrito([]);
  };

  const removeItem = (itemId) => {
    // setCarrito(
    //   carrito.map((item) => {
    //     return item.id === itemId
    //       ? { ...item, quantity: item.quantity - 1 }

    //       : item;
    //   })
    // );
    let newCarrito = [...carrito];
    let index = carrito.findIndex((item) => item.id === itemId);
    newCarrito[index].quantity--;
    if (newCarrito[index].quantity === 0) newCarrito.splice(index, 1);
    setCarrito(newCarrito);
  };
  const addItem = (itemId) => {
    setCarrito(
      carrito.map((item) => {
        return item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        value: carrito,
        setValue: setCartContext,
        clearCarrito,
        removeItem,
        addItem,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/Item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/Carrito" element={<CarritoList />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
