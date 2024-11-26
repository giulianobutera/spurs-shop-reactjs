import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ItemList({product}) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Precio: ${product.price}</Card.Text>
        <Link to={`/product/${product.id}`}><Button variant="primary">Ver detalles</Button></Link>
      </Card.Body>
    </Card>
  );
}
