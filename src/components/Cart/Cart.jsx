import { Button } from 'react-bootstrap';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Swal from 'sweetalert2';

export default function Cart() {
  const {cart, sumaPrecioItems, vaciarCarrito} = useCart();

  const vaciarCarritoCompleto = () => {
    Swal.fire({
      title: "¿Estás seguro que deseás vaciar tu carrito?",
      text: "No podrás deshacer esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, vaciar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire({ 
          position: "top-end",
          icon: "success",
          title: "Tu carrito se ha vaciado",
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
  }

  return (
    <>
      {cart.length > 0 ? (
        <section>
          <div className="d-flex justify-content-between">
            <h3 className="text-start">Tu carrito</h3>
            <div className="d-flex align-items-center">
              <Button variant="secondary" onClick={vaciarCarritoCompleto}>Vaciar Carrito</Button>
            </div>
          </div>
          <div className="d-flex">
            <div className="col-8">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="col-4" style={{paddingLeft: "1rem"}}>
              <div>
                <h4 className="text-start">Resumen de la compra:</h4>
                <h5 className="text-start">Total: ${sumaPrecioItems()}</h5>
              </div>
              <div className="d-flex justify-content-end">
                <Link to={`/cart/checkout`}><Button variant="primary" className="text-start">Iniciar checkout</Button></Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="mt-5">
          <h3>Aún no se han agregado productos a tu carrito.</h3>
          <Link to={`/home`}><Button variant="primary">Continuar compra</Button></Link>
        </section>
      )}
    </>
  );
}
