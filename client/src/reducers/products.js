import * as type from '../actions/types';

const initialState = {
  products: [],
  loading: false,
  error: undefined,
  showModal: { status: false, type: '', productId: '' },
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
    case type.SHOW_NEW_MODAL:
      return {
        ...state,
        showModal: { status: true, type: 'NEW', productId: '' },
      };
    case type.SHOW_UPDATE_MODAL:
      return {
        ...state,
        showModal: { status: true, type: 'EDIT', productId: action.productId },
      };
    case type.HIDE_MODAL:
      return {
        ...state,
        showModal: { status: false, type: '', productId: '' },
      };
    case type.UPDATE_PRODUCT_REQUESTED:
      return {
        ...state,
      };
    case type.UPDATE_PRODUCT_SUCESS:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product._id === action.product._id) {
            return {
              ...action.product,
            };
          }
          return product;
        }),
      };
    case type.UPDATE_PRODUCT_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case type.DELETE_PRODUCT_REQUESTED:
      return {
        ...state,
      };
    case type.DELETE_PRODUCT_SUCESS:
      return {
        ...state,
        products: action.product,
      };
    default:
      return state;
  }
}
