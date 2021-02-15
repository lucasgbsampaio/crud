import { call, put, takeEvery } from 'redux-saga/effects';
import { ALL_PRODUCTS } from '../services/api';

function* fetchProducts(action) {
  try {
    const products = yield call(ALL_PRODUCTS);
    yield put({ type: 'GET_PRODUCTS_SUCESS', products });
  } catch (error) {
    yield put({ type: 'GET_PRODUCTS_FAILED', message: error.message });
  }
}

function* productSaga() {
  yield takeEvery('GET_PRODUCTS_REQUESTED', fetchProducts);
}

export default productSaga;
