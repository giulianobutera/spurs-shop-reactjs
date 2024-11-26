import { getCategory } from "../../data/backend-falso";
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer({categoria}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategory(categoria)
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
  }, [categoria]);

  return (
    <>
      <h3 className="text-start">Explorar todo en {categoria}:</h3>
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
