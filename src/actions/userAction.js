import axios from 'axios';
import { getLogoutUserUrl } from '../utils/urlConfig';
import { LOGOUT_USER } from '../constants/userConstants';

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
  logoutUser
}