import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./componentes/Navbar/Navbar";
import Inicio from "./componentes/Inicio/Inicio";
import Tienda from "./componentes/Tienda/Tienda";
import TiendaId from "./componentes/Tienda/TiendaId";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/Tienda" element={<Tienda />} />
        <Route exact path="/Tienda/:id" element={<TiendaId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
