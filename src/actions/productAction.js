import axios from "axios";
import { CLEAR_ERRORS, SLIDER_PRODUCTS } from "../constants/productConstants";

// This is a clearError action creator function. 
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
}

// Get All the products - PRODUCT SLIDER
export const getSliderProducts = () => async (dispatch) => {
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
}
