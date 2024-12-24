import { getCategory } from '../../firebase/firebase';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([]);
    getCategory(categoryName)
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
  }, [categoryName]);

  return (
    <>
      <h3 className="text-start">Explorá todo en {categoryName}:</h3>
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
