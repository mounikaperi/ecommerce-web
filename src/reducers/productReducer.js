const { ALL_PRODUCTS, ADMIN_PRODUCTS, SLIDER_PRODUCTS, PRODUCT_DETAILS, REMOVE_PRODUCT_DETAILS, CLEAR_ERRORS, NEW_REVIEW, NEW_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, ALL_REVIEWS, DELETE_REVIEW } = require("../constants/productConstants");

const productsReducer = ({ type, payload}, state = {products: []}) => {
  switch (type) {
    case ALL_PRODUCTS.ALL_PRODUCTS_REQUEST:
    case ADMIN_PRODUCTS.ADMIN_PRODUCTS_REQUEST:
    case SLIDER_PRODUCTS.SLIDER_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: []
      };
    case ALL_PRODUCTS.ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: payload.products,
        productsCount: payload.productsCount,
        resultPerPage: payload.resultPerPage,
        filteredProductsCount: payload.filteredProductsCount
      };
    case ADMIN_PRODUCTS.ADMIN_PRODUCTS_SUCCESS:
    case SLIDER_PRODUCTS.SLIDER_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: payload
      };
    case ALL_PRODUCTS.ALL_PRODUCTS_FAIL:
    case ADMIN_PRODUCTS.ADMIN_PRODUCTS_FAIL:
    case SLIDER_PRODUCTS.SLIDER_PRODUCTS_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

const productDetailsReducer = ({type, payload}, {state = { product: {}}}) => {
  switch (type) {
    case PRODUCT_DETAILS.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case PRODUCT_DETAILS.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: payload
      };
    case PRODUCT_DETAILS.PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: payload
      };
    case REMOVE_PRODUCT_DETAILS:
      return {
        ...state,
        product: {}
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

const newReviewReducer = ({ type, payload}, state = {}) => {
  switch (type) {
    case NEW_REVIEW.NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true
      };
    case NEW_REVIEW.NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: payload
      };
    case NEW_REVIEW.NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case NEW_REVIEW.NEW_REVIEW_RESET:
      return {
        ...state,
        success: false
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

const newProductReducer = ({ type, payload }, state = { product: {}}) => {
  switch (type) {
    case NEW_PRODUCT.NEW_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case NEW_PRODUCT.NEW_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: payload.success,
        product: payload.product
      };
    case NEW_PRODUCT.NEW_PRODUCT_FAIL:
    case NEW_PRODUCT.NEW_PRODUCT_RESET:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

const productReducer = ({ type, payload}, state = {}) => {
  switch (type) {
    case UPDATE_PRODUCT.UPDATE_PRODUCT_REQUEST:
    case DELETE_PRODUCT.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case UPDATE_PRODUCT.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: payload
      };
    case DELETE_PRODUCT.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: payload
      };
    case UPDATE_PRODUCT.UPDATE_PRODUCT_FAIL:
    case DELETE_PRODUCT.DELETE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case UPDATE_PRODUCT.UPDATE_PRODUCT_RESET:
      return {
        ...state,
        isUpdated: false
      };
    case DELETE_PRODUCT.DELETE_PRODUCT_RESET:
      return {
        ...state,
        isDeleted: false
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

const productReviewsReducer = ({ type, payload}, state={reviews: []}) => {
  switch (type) {
    case ALL_REVIEWS.ALL_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ALL_REVIEWS.ALL_REVIEWS_SUCCESS:
      return {
        loading: false,
        reviews: payload
      };
    case ALL_REVIEWS.ALL_REVIEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

const reviewReducer = ({ type, payload}, state = {}) => {
  switch (type) {
    case DELETE_REVIEW.DELETE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true
      };
    case DELETE_REVIEW.DELETE_REVIEW_SUCCESS:
      return {
        loading: false,
        isDeleted: payload
      };
    case DELETE_REVIEW.DELETE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case DELETE_REVIEW.DELETE_REVIEW_RESET:
      return {
        ...state,
        isDeleted: false
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

module.exports = {
  productsReducer,
  productDetailsReducer,
  newReviewReducer,
  newProductReducer,
  productReducer,
  productReviewsReducer,
  reviewReducer
}