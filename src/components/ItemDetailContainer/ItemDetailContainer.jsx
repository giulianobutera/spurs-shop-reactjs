import { getProduct } from '../../firebase/firebase';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import ItemDetail from './ItemDetail';

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
      {Object.keys(product).length > 0 ? (
        <section>
          <ItemDetail product={product} />
        </section>
      ) : (
        <section className='spinner-section'>
          <Spinner />
        </section>
      )}
    </>
  )
}
