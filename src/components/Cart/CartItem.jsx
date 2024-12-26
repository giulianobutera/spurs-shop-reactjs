import { Button, Image, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useCart } from '../../hooks/useCart';
import Swal from 'sweetalert2';

export default function CartItem({ item }) {
  const {eliminarItem} = useCart();

  const eliminarItemDeCarrito = () => {
    Swal.fire({
      title: "¿Estás seguro que deseás eliminar este producto de tu carrito?",
      text: "No podrás deshacer esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarItem(item.id);
        Swal.fire({ 
          position: "top-end",
          icon: "success",
          title: "El producto se eliminó de tu carrito",
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
  }

  return (
    <>
      <Card className="cart-card ">
        <div className="d-flex align-items-center">

          <Image src={item.image} alt={item.title} height="128" className="me-3" />
          <div className="flex-grow-1">
            <h5 className="mb-1">{item.title}</h5>
            <p className="mb-1">Cantidad: {item.amount} (Precio unitario: ${item.price})</p>
            <p className="mb-1">Subtotal: ${item.price * item.amount}</p>
          </div>
          <Button variant="danger" onClick={eliminarItemDeCarrito}><FaTrash></FaTrash></Button>
        </div>
      </Card>
    </>
  );
}
