import * as type from './types';

export function getProductsRequested() {
  return {
    type: type.GET_PRODUCTS_REQUESTED,
  };
}
export function getProductsSucess(products) {
  return {
    type: type.GET_PRODUCTS_SUCESS,
    products,
  };
}

/* export function newProductRequested(products) {
  return {
    type: type.NEW_PRODUCT_REQUESTED,
    products,
  };
}
export function newProductSucess(products) {
  return {
    type: type.NEW_PRODUCT_SUCESS,
    products,
  };
}
export function newProductFailed(products) {
  return {
    type: type.NEW_PRODUCT_FAILED,
    products,
  };
}

export function updateProductRequested(products) {
  return {
    type: type.UPDATE_PRODUCT_REQUESTED,
    products,
  };
}
export function updateProductSucess(products) {
  return {
    type: type.UPDATE_PRODUCT_SUCESS,
    products,
  };
}
export function updateProductFailed(products) {
  return {
    type: type.UPDATE_PRODUCT_FAILED,
    products,
  };
}

export function deleteProductRequested(products) {
  return {
    type: type.DELETE_PRODUCT_REQUESTED,
    products,
  };
}
export function deleteProductSucess(products) {
  return {
    type: type.DELETE_PRODUCT_SUCESS,
    products,
  };
}
 */
