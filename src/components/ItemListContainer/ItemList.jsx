import { Row, Col } from 'react-bootstrap';
import Item from './Item';

export default function ItemList({products}) {
  return (
    <Row> 
      {products.map((prod) => ( 
        <Col key={prod.id} sm={12} md={6} lg={3}> 
          <Item key={prod.id} product={prod} />
        </Col> 
      ))} 
    </Row>
  );
}
