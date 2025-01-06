import axios from "axios";
import { getAllOrdersUrl, getDeleteOrderUrl, getMyOrdersUrl, getNewOrderUrl, getOrderDetailsUrl, 
  getPaymentStatusUrl, getUpdateOrderUrl } from "../utils/urlConfig";
import { ALL_ORDERS, CLEAR_ERRORS, DELETE_ORDER, MY_ORDERS, NEW_ORDER, ORDER_DETAILS, PAYMENT_STATUS, 
  UPDATE_ORDER } from "../constants/orderConstants";

const newOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ORDER.NEW_ORDER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      }
    };
    const { data } = await axios.post(getNewOrderUrl(), order, config);
    dispatch({ type: NEW_ORDER.NEW_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: NEW_ORDER.NEW_ORDER_FAIL, payload: error.response.data.message });
  }
};

const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDERS.MY_ORDERS_REQUEST });
    const { data } = await axios.get(getMyOrdersUrl());
    dispatch({ type: MY_ORDERS.MY_ORDERS_SUCCESS });
  } catch (error) {
    dispatch({ type: MY_ORDERS.MY_ORDERS_FAIL, payload: error.response.data.message });
  }
};

const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS.ORDER_DETAILS_REQUEST });
    const { data } = await axios.get(getOrderDetailsUrl());
    dispatch({
        type: ORDER_DETAILS.ORDER_DETAILS_SUCCESS,
        payload: data.order,
    });
  } catch (error) {
      dispatch({
          type: ORDER_DETAILS.ORDER_DETAILS_FAIL,
          payload: error.response.data.message,
      });
  }
};

const getPaymentStatus = (id) => async (dispatch) => {
  try {
    dispatch({ type: PAYMENT_STATUS.PAYMENT_STATUS_REQUEST });
    const { data } = await axios.get(getPaymentStatusUrl());

    dispatch({type: PAYMENT_STATUS.PAYMENT_STATUS_SUCCESS, payload: data.txn})
  } catch (error) {
    dispatch({
      type: PAYMENT_STATUS.PAYMENT_STATUS_FAIL,
      payload: error.response.data.message,
    });
  }
};

const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDERS.ALL_ORDERS_REQUEST });
    const { data } = await axios.get(getAllOrdersUrl());
    dispatch({
      type: ALL_ORDERS.ALL_ORDERS_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: ALL_ORDERS.ALL_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

const updateOrder = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER.UPDATE_ORDER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(getUpdateOrderUrl(), order, config);
    dispatch({ type: UPDATE_ORDER.UPDATE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER.UPDATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

const deleteOrder = () => (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ORDER.DELETE_ORDER_REQUEST });
    const { data } = await axios.delete(getDeleteOrderUrl());
    dispatch({
      type: DELETE_ORDER.DELETE_ORDER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({ type: DELETE_ORDER.DELETE_ORDER_FAIL, payload: error.response.data.message });
  }
};

// Clear All Errors
const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

module.exports = {
  newOrder,
  myOrders,
  getOrderDetails,
  getPaymentStatus,
  getAllOrders,
  updateOrder,
  deleteOrder,
  clearErrors
};
