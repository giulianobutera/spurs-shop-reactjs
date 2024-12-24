import { Container, Button, Card } from 'react-bootstrap';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

function Cart() {
  const {cart, sumaPrecioItems} = useCart();

  return (
    <>
      {cart.length > 0 ? (
        <section>
          <div className="d-flex justify-content-between">
            <h3 className="text-start">Tu carrito</h3>
            <div className="d-flex align-items-center">
              <Button variant="secondary">Vaciar Carrito</Button>
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
                  <Button variant="primary" className="text-start">Confirmar Compra</Button>
                </div>
              </div>
            </div>
        </section>
      ) : (
        <section className="mt-5">
          <h3>Aún no se han agregado productos al carrito.</h3>
          <Link to={`/home`}><Button variant="primary">Continuar compra</Button></Link>
        </section>
      )}
    </>
  );
}

export default Cart;
