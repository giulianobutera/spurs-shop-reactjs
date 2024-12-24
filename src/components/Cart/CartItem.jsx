import { Button, Image, Container, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

function CartItem({ item }) {
  return (
    <>
      <Card className="cart-card ">
        <div className="d-flex align-items-center">

          <Image src={item.image} alt={item.title} height="128" className="me-3" />
          <div className="flex-grow-1">
            <h5 className="mb-1">{item.title}</h5>
            <p className="mb-1">Cantidad: {item.amount}</p>
            <p className="mb-1">Precio unitario: ${item.price}</p>
            <p className="mb-1">Subtotal: ${item.price * item.amount}</p>
          </div>
          <Button variant="danger"><FaTrash></FaTrash></Button>
        </div>
      </Card>
    </>
  );
}

export default CartItem;
