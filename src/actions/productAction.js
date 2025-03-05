import axios from "axios";
import { ADMIN_PRODUCTS, ALL_PRODUCTS, ALL_REVIEWS, CLEAR_ERRORS, DELETE_PRODUCT, DELETE_REVIEW, NEW_PRODUCT, NEW_REVIEW, SLIDER_PRODUCTS, UPDATE_PRODUCT } from "../constants/productConstants";
import { getAdminCreateProductUrl, getAdminProductsUrl, getAdminProductUrl, getAdminReviewsUrl, getAllProducts, getNewReviewUserUrl, getProduct, getProductsUrl } from "../utils/urlConfig";

// Get All Products --- Filter/Search/Sort
export const getProducts = (category, price = [0, 200000], ratings = 0, currentPage = 1, keyword = "") => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS.ALL_PRODUCTS_REQUEST });

    let url = `${getProductsUrl()}?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
    if (category) {
      url = `${getProductsUrl()}?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
    }
    const { data } = await axios.get(url);

    dispatch({
      type: ALL_PRODUCTS.ALL_PRODUCTS_REQUEST,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS.ALL_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Products Of Same Category
export const getSimilarProducts = (category) => async (dispatch) => {
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

// Get Product Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS.PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(getProduct(id));

    dispatch({
      type: ALL_PRODUCTS.PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS.PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// New/Update Review
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW.NEW_REVIEW_REQUEST });
    const config = { header: { "Content-Type": "application/json" } }
    const { data } = await axios.put(getNewReviewUserUrl(), reviewData, config);

    dispatch({
      type: NEW_REVIEW.NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW.NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
}

// Get All Products ---PRODUCT SLIDER
export const getSliderProducts = () => async (dispatch) => {
  try {
    dispatch({ type: SLIDER_PRODUCTS.SLIDER_PRODUCTS_REQUEST });

    const { data } = await axios.get(getAllProducts());

    dispatch({
      type: SLIDER_PRODUCTS.SLIDER_PRODUCTS_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: SLIDER_PRODUCTS.SLIDER_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Products ---ADMIN
export const getAdminProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCTS.ADMIN_PRODUCTS_REQUEST });

    const { data } = await axios.get(getAdminProductsUrl());

    dispatch({
      type: ADMIN_PRODUCTS.ADMIN_PRODUCTS_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCTS.ADMIN_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// New Product ---ADMIN
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT.NEW_PRODUCT_REQUEST });
    const config = { header: { "Content-Type": "application/json" } }
    const { data } = await axios.post(getAdminCreateProductUrl(), productData, config);

    dispatch({
      type: NEW_PRODUCT.NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT.NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
}

// Update Product ---ADMIN
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT.UPDATE_PRODUCT_REQUEST });
    const config = { header: { "Content-Type": "application/json" } }
    const { data } = await axios.put(getAdminProductUrl(id), productData, config);

    dispatch({
      type: UPDATE_PRODUCT.UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT.UPDATE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
}

// Delete Product ---ADMIN
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT.DELETE_PRODUCT_REQUEST });
    const { data } = await axios.delete(getProduct(id));

    dispatch({
      type: DELETE_PRODUCT.DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT.DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
}

// Get Product Reviews ---ADMIN
export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEWS.ALL_REVIEWS_REQUEST });
    const { data } = await axios.get(`${getAdminReviewsUrl()}?id=${id}`);

    dispatch({
      type: ALL_REVIEWS.ALL_REVIEWS_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEWS.ALL_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
}

// Delete Product Review ---ADMIN
export const deleteReview = (reviewId, productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REVIEW.DELETE_REVIEW_REQUEST });
    const { data } = await axios.delete(`${getAdminReviewsUrl()}?id=${reviewId}&productId=${productId}`);

    dispatch({
      type: DELETE_REVIEW.DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW.DELETE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
}

// Clear All Errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
}