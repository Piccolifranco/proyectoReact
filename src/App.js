import Nabvar from "./componentes/Navbar/Navbar";
import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Nabvar />
      <ItemListContainer saludo="Bienvenidos a la tienda!" />
    </div>
  );
}

export default App;
