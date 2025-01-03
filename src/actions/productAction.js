import axios from "axios";
import { ALL_PRODUCTS, CLEAR_ERRORS, NEW_REVIEW, SLIDER_PRODUCTS } from "../constants/productConstants";
import { getNewReviewUserUrl, getProductsUrl } from "../utils/urlConfig";

// This is a clearError action creator function. 
const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// Get All the products - PRODUCT SLIDER
const getSliderProducts = () => async (dispatch) => {
  try {
    dispatch({ type: SLIDER_PRODUCTS.SLIDER_PRODUCTS_REQUEST })
    const { data } = await axios.get('/api/v1/products/all');
    dispatch({
      type: SLIDER_PRODUCTS.SLIDER_PRODUCTS_SUCCESS,
      payload: data.products
    });
  } catch (error) {
    dispatch({
      type: SLIDER_PRODUCTS.SLIDER_PRODUCTS_FAIL,
      payload: error.response.data.message
    });
  }
};

const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW.NEW_REVIEW_REQUEST });
    const config = { header: { "Content-Type": "application/json" }}
    const { data } = await axios.put(getNewReviewUserUrl(), reviewData, config);
    dispatch({ type: NEW_REVIEW.NEW_REVIEW_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({ type: NEW_REVIEW.NEW_REVIEW_FAIL, payload: error.response.data.message });
  }
};

const getProducts = (category, keyword = "", price = [0, 200000], ratings = 0, currentPage = 1) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS.ALL_PRODUCTS_REQUEST });
    let url = `${getProductsUrl()}?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
    if (category) {
      url = `${url}&category=${category}`;
    }
    const { data } = await axios.get(url);
    dispatch({ type: ALL_PRODUCTS.ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_PRODUCTS.ALL_PRODUCTS_FAIL, payload: error.response.data.message });
  }
};

const getSimilarProducts = (category) => async (dispatch) => {
  try {
      dispatch({ type: ALL_PRODUCTS.ALL_PRODUCTS_REQUEST });
      const { data } = await axios.get(`${getProductsUrl()}?category=${category}`);
      dispatch({
          type: ALL_PRODUCTS.ALL_PRODUCTS_SUCCESS,
          payload: data,
      });
  } catch (error) {
      dispatch({
          type: ALL_PRODUCTS.ALL_PRODUCTS_FAIL,
          payload: error.response.data.message,
      });
  }
};

module.exports = {
  getSliderProducts,
  clearErrors,
  newReview,
  getSimilarProducts,
  getProducts
};
