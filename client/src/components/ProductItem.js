import React from 'react';
import { useDispatch } from 'react-redux';

import { showUpdateModal, deleteProductRequested } from '../actions/products';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div>
      <span style={{ padding: '5px' }}>{product.name}</span>
      <span style={{ padding: '5px' }}>{product.price}</span>
      <span style={{ padding: '5px' }}>{product.perishable}</span>
      <span style={{ padding: '5px' }}>{product.manufacture_date}</span>
      <span style={{ padding: '5px' }}>{product.expiration_date}</span>
      <button onClick={() => dispatch(showUpdateModal(product._id))}>
        edit
      </button>
      <button onClick={() => dispatch(deleteProductRequested(product._id))}>
        delete
      </button>
    </div>
  );
}
