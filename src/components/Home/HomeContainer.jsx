import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getProducts } from '../../firebase/firebase';
import ItemList from "../ItemList/ItemList";

export default function HomeContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
  }, []);

  return (
    <>
      <h3 className="text-start">Explorá todos los productos:</h3>
      <Container> 
        <Row> 
          {products.map((prod) => ( 
            <Col key={prod.id} sm={12} md={6} lg={4}> 
              <ItemList key={prod.id} product={prod} />
            </Col> 
          ))} 
        </Row> 
      </Container>
    </>
  );
}
