import axios from 'axios';
import { getLoginUserUrl, getLogoutUserUrl, getRegisterUserUrl } from '../utils/urlConfig';
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from '../constants/userConstants';

const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER.REGISTER_USER_REQUEST });  
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    const { data } = await axios.post(getRegisterUserUrl(), userData, config);
    dispatch({
      type: REGISTER_USER.REGISTER_USER_SUCCESS,
      payload: data.user
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER.REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER.LOGIN_USER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "/application/json"
      }
    };
    const { data } = await axios.post(getLoginUserUrl(), { email, password }, config);
    dispatch({ 
      type: LOGIN_USER.LOGIN_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER.LOGIN_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

const logoutUser = () => async (dispatch) => {
  try {
    await axios.get(getLogoutUserUrl());
    dispatch({ type: LOGOUT_USER.LOGOUT_USER_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_USER.LOGOUT_USER_FAIL,
      payload: error.response.data.message
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser
}