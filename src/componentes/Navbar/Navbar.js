import Carrito from "../Carrito/Carrito";
import "./nabvar.css";

const Nabvar = () => {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png"
        alt="logo"
      />

      <ul className="barra">
        <li>
          <button>Inicio</button>
        </li>
        <li>
          <button>Black friday</button>
        </li>
        <li>
          <button>Temporada 2022</button>
        </li>
        <li>
          <button>Contacto</button>
        </li>
      </ul>

      <Carrito src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png" />
    </nav>
  );
};

export default Nabvar;
