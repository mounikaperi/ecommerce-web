import axios from 'axios';
import { getAdminUserUrl, getAllUsersUrl, getForgotUserPasswordUrl, getLoadUserUrl, getLoginUserUrl, getLogoutUserUrl, getRegisterUserUrl, getUpdateUserPasswordUrl, getUpdateUserProfileUrl, getUserResetPasswordUrl } from '../utils/urlConfig';
import { ALL_USERS, CLEAR_ERRORS, DELETE_USER, FORGOT_PASSWORD, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, RESET_PASSWORD, UPDATE_PASSWORD, UPDATE_PROFILE, UPDATE_USER, USER_DETAILS } from '../constants/userConstants';

export const registerUser = (userData) => async (dispatch) => {
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

export const loginUser = (email, password) => async (dispatch) => {
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

export const logoutUser = () => async (dispatch) => {
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

export const loadUser = () => async (dispatch) => {
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

export const updateProfile = (userData) => async (dispatch) => {
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
 
export const updatePassword = (passwords) => async (dispatch) => {
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

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD.FORGOT_PASSWORD_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      }
    };
    const { data } = await axios.post(getForgotUserPasswordUrl(), email, config);
    dispatch({ type: FORGOT_PASSWORD.FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: FORGOT_PASSWORD.FORGOT_PASSWORD_FAIL, payload: error.response.data.message });
  }
};

export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD.RESET_PASSWORD_REQUEST });
    const config = {
      headers: {
          "Content-Type": "application/json",
      },
    }
    const { data } = await axios.get(getUserResetPasswordUrl(), passwords, config);
    dispatch({ type: RESET_PASSWORD.RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({ type: RESET_PASSWORD.RESET_PASSWORD_FAIL, payload: error.response.data.message });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS.ALL_USERS_REQUEST });
    const { data } = await axios.get(getAllUsersUrl());
    dispatch({ type: ALL_USERS.ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({ type: ALL_USERS.ALL_USERS_FAIL, payload: error.response.data.message });
  }
};

export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS.USER_DETAILS_REQUEST });
    const { data } = await axios.get(getAdminUserUrl(id));
    dispatch({ type: USER_DETAILS.USER_DETAILS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: USER_DETAILS.USER_DETAILS_FAIL, payload: error.response.data.message });
  }
};

export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER.UPDATE_USER_REQUEST });
    const config = {
      headers: {
          "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(getAdminUserUrl(id), userData, config);
    dispatch({ type: UPDATE_USER.UPDATE_USER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({ type: UPDATE_USER.UPDATE_USER_FAIL, payload: error.response.data.message });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER.DELETE_USER_REQUEST });
    const { data } = await axios.delete(getAdminUserUrl(id));
    dispatch({ type: DELETE_USER.DELETE_USER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({ type: DELETE_USER.DELETE_USER_FAIL, payload: error.response.data.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
