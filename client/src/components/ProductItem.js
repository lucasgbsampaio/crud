import React from 'react';
import { useDispatch } from 'react-redux';

import { showUpdateModal, deleteProductRequested } from '../actions/products';
import convertDate from '../utils/convertDate';

import remove from '../assets/remove.svg';
import edit from '../assets/edit.svg';

import style from './styles/ProductItem.module.css';

export default function ProductItem({ product, index }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{index}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      {product.perishable ? <td>Sim</td> : <td>Não</td>}
      <td>{convertDate(product.manufacture_date)}</td>
      <td>
        {product.expiration_date ? convertDate(product.expiration_date) : '-'}
      </td>
      <td>
        <div className={style.image}>
          <img
            onClick={() => dispatch(showUpdateModal(product._id))}
            src={edit}
            alt="edit"
          />
        </div>
      </td>
      <td>
        <div className={style.image}>
          <img
            onClick={() => dispatch(deleteProductRequested(product._id))}
            src={remove}
            alt="remove"
          />
        </div>
      </td>
    </tr>
  );
}
