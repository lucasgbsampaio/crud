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

export function newProductRequested(product) {
  return {
    type: type.NEW_PRODUCT_REQUESTED,
    product,
  };
}
export function newProductSucess(product) {
  return {
    type: type.NEW_PRODUCT_SUCESS,
    product,
  };
}
export function newProductFailed(error) {
  return {
    type: type.NEW_PRODUCT_FAILED,
    error,
  };
}

export function showNewModal() {
  return {
    type: type.SHOW_NEW_MODAL,
  };
}
export function showUpdateModal(productId) {
  return {
    type: type.SHOW_UPDATE_MODAL,
    productId,
  };
}
export function hideModal() {
  return {
    type: type.HIDE_MODAL,
  };
}

export function updateProductRequested(product, productId) {
  return {
    type: type.UPDATE_PRODUCT_REQUESTED,
    product,
    productId,
  };
}
export function updateProductSucess(product) {
  return {
    type: type.UPDATE_PRODUCT_SUCESS,
    product,
  };
}
export function updateProductFailed(error) {
  return {
    type: type.UPDATE_PRODUCT_FAILED,
    error,
  };
}

export function deleteProductRequested(product) {
  return {
    type: type.DELETE_PRODUCT_REQUESTED,
    product,
  };
}
export function deleteProductSucess(product) {
  return {
    type: type.DELETE_PRODUCT_SUCESS,
    product,
  };
}
