import { useState } from 'react';
import { useCart } from '../../hooks/useCart';

function ItemCount({ product }) {
  const [cantidad, setCantidad] = useState(1);
  const {agregarItem} = useCart();

  const disminuirCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const agregarAlCarrito = () => {
    agregarItem({...product, amount: cantidad});
  };

  return (
    <div>
      <button className="btn btn-primary me-2" onClick={disminuirCantidad} disabled={cantidad === 1}>-</button>
      <span className="me-2">{cantidad}</span>
      <button className="btn btn-primary me-2" onClick={aumentarCantidad}>+</button>
      <button className="btn btn-primary" onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
