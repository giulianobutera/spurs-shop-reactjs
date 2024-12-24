import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { getProducts } from '../../firebase/firebase';
import ItemList from "../ItemListContainer/ItemList";

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
      {products.length > 0 ? (
        <section>
          <ItemList products={products} />
        </section>
      ) : (
        <section className='spinner-section'>
          <Spinner />
        </section>
      )}
    </>
  );
}
