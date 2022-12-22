import React from "react";
import { Link } from "react-router-dom";
import Carrito from "../Carrito/Carrito";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png"
        alt="logo"
      />

      <ul className="barra">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/">Black friday</Link>
        </li>
        <li>
          <Link to="/">Descubri tu producto estrella</Link>
        </li>
        <li>
          <Link to="/">Contacto</Link>
        </li>
      </ul>

      <Carrito src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png" />
    </nav>
  );
};

export default Navbar;
