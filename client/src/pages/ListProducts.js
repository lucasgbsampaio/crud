import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';

import { getProductsRequested, showNewModal } from '../actions/products';

import ProductModal from '../components/ProductModal';
import ProductItem from '../components/ProductItem';

export default function ListProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  /*   const loading = useSelector((state) => state.products.loading);
   */

  React.useEffect(() => {
    dispatch(getProductsRequested());
  }, [dispatch]);

  console.log(products);

  return (
    <main>
      <Button variant="primary" onClick={() => dispatch(showNewModal())}>
        Lançamento
      </Button>

      {products.map((product) => {
        return <ProductItem key={product._id} product={product} />;
      })}

      <ProductModal />
    </main>
  );
}
