import { getProduct } from "../../data/backend-falso";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error(error))
  }, []);

  return (
    <>
      <Container>
        <Row className="my-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Card.Text>
                  <strong>Precio: ${product.price}</strong>
                </Card.Text>
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
