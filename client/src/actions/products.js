import * as type from './types';

export function getProducts(products) {
  return {
    type: type.GET_PRODUCTS_REQUESTED,
    payload: products,
  };
}
