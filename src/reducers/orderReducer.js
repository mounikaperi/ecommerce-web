const { NEW_ORDER, MY_ORDERS, PAYMENT_STATUS, ORDER_DETAILS, ALL_ORDERS, UPDATE_ORDER, DELETE_ORDER } = require("../constants/orderConstants");
const { CLEAR_ERRORS } = require("../constants/productConstants");

const newOrderReducer = ({ type, payload}, state = {}) => {
  switch (type) {
    case NEW_ORDER.NEW_ORDER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case NEW_ORDER.NEW_ORDER_SUCCESS:
      return {
        loading: false,
        order: payload
      };
    case NEW_ORDER.NEW_ORDER_FAIL:
      return {
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

const myOrdersReducer = ({type, payload}, state={orders: []}) => {
  switch (type) {
    case MY_ORDERS.MY_ORDERS_REQUEST:
      return {
        loading: true
      };
    case MY_ORDERS.MY_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: payload
      };
    case MY_ORDERS.MY_ORDERS_FAIL:
      return {
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

const paymentStatusReducer = ({ type, payload}, state = {txn: {}}) => {
  switch (type) {
    case PAYMENT_STATUS.PAYMENT_STATUS_REQUEST:
      return {
        loading: true
      };
    case PAYMENT_STATUS.PAYMENT_STATUS_SUCCESS:
      return {
        loading: false,
        txn: payload
      };
    case PAYMENT_STATUS.PAYMENT_STATUS_FAIL:
      return {
        loading: false,
        error: payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

const orderDetailsReducer = ({ type, payload }, state = { order: {} }) => {
  switch (type) {
    case ORDER_DETAILS.ORDER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case ORDER_DETAILS.ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: payload,
      };
    case ORDER_DETAILS.ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

const allOrdersReducer = ({ type, payload }, state = { orders: [] }) => {
  switch (type) {
    case ALL_ORDERS.ALL_ORDERS_REQUEST:
      return {
        loading: true,
      };
    case ALL_ORDERS.ALL_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: payload,
      };
    case ALL_ORDERS.ALL_ORDERS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

const orderReducer = ({ type, payload }, state = {}) => {
  switch (type) {
    case UPDATE_ORDER.UPDATE_ORDER_REQUEST:
    case DELETE_ORDER.DELETE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_ORDER.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: payload,
      };
    case DELETE_ORDER.DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: payload,
      };
    case UPDATE_ORDER.UPDATE_ORDER_FAIL:
    case DELETE_ORDER.DELETE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case UPDATE_ORDER.UPDATE_ORDER_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case DELETE_ORDER.DELETE_ORDER_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

module.exports = {
  newOrderReducer,
  myOrdersReducer,
  paymentStatusReducer,
  orderDetailsReducer,
  allOrdersReducer,
  orderReducer
}