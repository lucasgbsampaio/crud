import { call, put, takeLatest } from 'redux-saga/effects';
import {
  ALL_PRODUCTS,
  NEW_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from '../services/api';

import {
  getProductsSucess,
  newProductFailed,
  newProductSucess,
  updateProductFailed,
  updateProductSucess,
  deleteProductSucess,
} from '../actions/products';

function* getProducts(action) {
  try {
    const products = yield call(ALL_PRODUCTS);
    yield put(getProductsSucess(products));
  } catch (error) {
    yield put();
  }
}

/* function* newProduct(action) {
  try {
    const product = yield call(NEW_PRODUCT(action.product));
    yield put(newProductSucess(product));
  } catch (error) {
    yield put(newProductFailed(error));
  }
}

function* updateProduct(action) {
  try {
    const product = yield call(UPDATE_PRODUCT(action.product));
    yield put(updateProductSucess(product));
  } catch (error) {
    yield put(updateProductFailed(error));
  }
}

function* deleteProduct(action) {
  try {
    const product = yield call(DELETE_PRODUCT);
    yield put(deleteProductSucess());
  } catch (error) {
    yield put();
  }
} */

function* productSaga() {
  yield takeLatest('GET_PRODUCTS_REQUESTED', getProducts);
  /* yield takeLatest('NEW_PRODUCT_REQUESTED', newProduct);
  yield takeLatest('UPDATE_PRODUCT_REQUESTED', updateProduct);
  yield takeLatest('DELETE_PRODUCT_REQUESTED', deleteProduct); */
}

export default productSaga;
