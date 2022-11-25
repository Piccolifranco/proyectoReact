import "./carrito.css";

const Carrito = ({ src, alt }) => {
  return (
    <div className="carrito">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Carrito;
