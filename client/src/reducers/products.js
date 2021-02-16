import * as type from '../actions/types';

const initialState = {
  products: [],
  loading: false,
  error: undefined,
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

    case type.NEW_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.NEW_PRODUCT_SUCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.product],
      };
    case type.NEW_PRODUCT_FAILED:
      return {
        ...state,
        error: action.error,
      };
    /*
     case type.UPDATE_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.UPDATE_PRODUCT_SUCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
      };
    case type.UPDATE_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case type.DELETE_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.DELETE_PRODUCT_SUCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
      }; */
    default:
      return state;
  }
}
