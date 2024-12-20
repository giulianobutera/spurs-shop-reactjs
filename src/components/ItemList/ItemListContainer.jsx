import { getCategory } from "../../data/backend-falso";
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategory(categoryName)
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
  }, [categoryName]);

  return (
    <>
      <h3 className="text-start">Explorá todo en {categoryName}:</h3>
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
