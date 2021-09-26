import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_ONE_PRODUCT,
  GET_PRODUCTS,
  SHOW_PRODUCT_FORM,
  UPDATE_PRODUCT,
} from "../actions/actionTypes";

const initialState = {
  showForm: false,
  edit: false,
  success: false,
  loading: false,
  productToDelete: "",
  currentProduct: null,
  newProduct: {
    id: 0,
    description: "",
    imageUrl: "",
    name: "",
    count: null,
    width: null,
    height: null,
    weight: null,
  },
  products: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCT_FORM:
      return { ...state, ...action.payload };
    case GET_PRODUCTS:
      return { ...state, ...action.payload };
    case GET_ONE_PRODUCT:
      return { ...state, ...action.payload };
    case ADD_PRODUCT: {
      let newState;
      if (action.payload.loading === false && action.payload.success === true)
        newState = {
          ...state,
          ...action.payload,
          products: [...state.products, action.payload.newProduct],
        };
      else newState = { ...state, ...action.payload };
      return newState;
    }
    case UPDATE_PRODUCT:
      return { ...state, ...action.payload };
    case DELETE_PRODUCT: {
      let newState;
      if (action.payload.loading === false && action.payload.success === true) {
        const products = state.products.filter(
          (item) => item.id !== state.productToDelete
        );
        newState = {
          ...state,
          ...action.payload,
          products: products,
        };
      } else newState = { ...state, ...action.payload };
      return newState;
    }
    default:
      return state;
  }
};

export default authReducer;
