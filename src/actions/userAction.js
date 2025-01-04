import axios from 'axios';
import { getLoadUserUrl, getLoginUserUrl, getLogoutUserUrl, getRegisterUserUrl, getUpdateUserPasswordUrl, getUpdateUserProfileUrl } from '../utils/urlConfig';
import { LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, UPDATE_PASSWORD, UPDATE_PROFILE } from '../constants/userConstants';

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

const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER.LOAD_USER_REQUEST });
    const { data } = await axios.get(getLoadUserUrl());
    dispatch({ type: LOAD_USER.LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOAD_USER.LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE.UPDATE_PROFILE_REQUEST });
    const config = {
      headers: {
          "Content-Type": "multipart/form-data",
      }
    };
    const { data } = await axios.put(
      getUpdateUserProfileUrl(),
      userData,
      config
    );
    dispatch({
      type: UPDATE_PROFILE.UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE.UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};
 
const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD.UPDATE_PASSWORD_REQUEST });
    const config = {
      headers: {
          "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      getUpdateUserPasswordUrl(),
      passwords,
      config
    );
    dispatch({
      type: UPDATE_PASSWORD.UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD.UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  loadUser,
  updateProfile,
  updatePassword
}