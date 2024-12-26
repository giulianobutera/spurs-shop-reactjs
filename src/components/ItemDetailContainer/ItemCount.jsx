import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function ItemCount({ product }) {
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
    Swal.fire({ 
      position: "top-end",
      icon: "success",
      title: "El producto se agregó a tu carrito",
      showConfirmButton: false,
      timer: 1000
    });
  };

  return (
    <div>
      <Button className="btn btn-primary me-2" onClick={disminuirCantidad} disabled={cantidad === 1}>-</Button>
      <span className="me-2">{cantidad}</span>
      <Button className="btn btn-primary me-2" onClick={aumentarCantidad}>+</Button>
      <Button className="btn btn-primary" onClick={agregarAlCarrito}>Agregar al carrito</Button>
    </div>
  );
}
