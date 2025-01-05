import axios from "axios"
import { getAddItemToCartUrl } from "../utils/urlConfig";
import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "../constants/cartConstants";

const addItemsToCart = (id, quantity=1) => async (dispatch, getState) => {
  const { data } = await axios.get(getAddItemToCartUrl());
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      seller: data.product.brand.name,
      price: data.product.price,
      cuttedPrice: data.product.cuttedPrice,
      image: data.product.images[0].url,
      stock: data.product.stock,
      quantity
    }
  });
};

const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({ type: SAVE_SHIPPING_INFO, payload: data });
  localStorage.setItem('shippingInfo', JSON.stringify(data));
}

module.exports = {
  addItemsToCart,
  removeItemsFromCart,
  saveShippingInfo
}