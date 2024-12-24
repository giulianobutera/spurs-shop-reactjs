import { Container, Row, Col, Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

export default function ItemDetail({product}) {
  return (
    <>
      <Container>
        <Row className="my-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>Precio: ${product.price}</strong></Card.Text>
                <ItemCount product={product} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.title} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
