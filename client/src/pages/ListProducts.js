import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';

import { getProducts } from '../actions/products';

import ProductModal from '../components/ProductModal';

function ListProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  /* const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error); */
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <main>
      <Button variant="primary" onClick={() => setShow(!show)}>
        Lançamento
      </Button>

      <ProductModal show={show} setShow={setShow} />
    </main>
  );
}

export default ListProducts;
