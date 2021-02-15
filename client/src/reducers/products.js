import * as type from '../actions/types';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case type.GET_PRODUCTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_PRODUCTS_SUCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
      };
    case type.GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
