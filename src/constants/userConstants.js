const REGISTER_USER = {
  REGISTER_USER_REQUEST: "REGISTER_USER_REQUEST",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAIL: "REGISTER_USER_FAIL"
};

const LOGIN_USER = {
  LOGIN_USER_REQUEST: "LOGIN_USER_REQUEST",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_FAIL: "LOGIN_USER_FAIL"
};

const LOGOUT_USER = {
  LOGOUT_USER_SUCCESS: 'LOGOUT_USER_SUCCESS',
  LOGOUT_USER_FAIL: 'LOGOUT_USER_FAIL'
};

const LOAD_USER = {
  LOAD_USER_REQUEST: "LOAD_USER_REQUEST",
  LOAD_USER_SUCCESS: "LOAD_USER_SUCCESS",
  LOAD_USER_FAIL: "LOAD_USER_FAIL"
};

const UPDATE_PROFILE = {
  UPDATE_PROFILE_REQUEST: "UPDATE_PROFILE_REQUEST",
  UPDATE_PROFILE_SUCCESS: "UPDATE_PROFILE_SUCCESS",
  UPDATE_PROFILE_FAIL: "UPDATE_PROFILE_FAIL",
  UPDATE_PROFILE_RESET: "UPDATE_PROFILE_RESET"
};

const UPDATE_PASSWORD = {
  UPDATE_PASSWORD_REQUEST: "UPDATE_PASSWORD_REQUEST",
  UPDATE_PASSWORD_SUCCESS: "UPDATE_PASSWORD_SUCCESS",
  UPDATE_PASSWORD_FAIL: "UPDATE_PASSWORD_FAIL",
  UPDATE_PASSWORD_RESET: "UPDATE_PASSWORD_RESET"
};

const FORGOT_PASSWORD = {
  FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_FAIL: "FORGOT_PASSWORD_FAIL"
};

const RESET_PASSWORD = {
  RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAIL: "RESET_PASSWORD_FAIL"
};

const ALL_USERS = {
  ALL_USERS_REQUEST: "ALL_USERS_REQUEST",
  ALL_USERS_SUCCESS: "ALL_USERS_SUCCESS",
  ALL_USERS_FAIL: "ALL_USERS_FAIL"
};

const USER_DETAILS = {
  USER_DETAILS_REQUEST: "USER_DETAILS_REQUEST",
  USER_DETAILS_SUCCESS: "USER_DETAILS_SUCCESS",
  USER_DETAILS_FAIL: "USER_DETAILS_FAIL"
};

const UPDATE_USER = {
  UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST",
  UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
  UPDATE_USER_FAIL: "UPDATE_USER_FAIL",
  UPDATE_USER_RESET: "UPDATE_USER_RESET"
};

const DELETE_USER = {
  DELETE_USER_REQUEST: "DELETE_USER_REQUEST",
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_FAIL: "DELETE_USER_FAIL",
  DELETE_USER_RESET: "DELETE_USER_RESET"
};

const REMOVE_USER = {
  REMOVE_USER_DETAILS: "REMOVE_USER_DETAILS"
};

const CLEAR_ERRORS = "CLEAR_ERRORS";

module.exports = {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOAD_USER,
  UPDATE_PROFILE,
  UPDATE_PASSWORD,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  ALL_USERS,
  USER_DETAILS,
  UPDATE_USER,
  DELETE_USER,
  CLEAR_ERRORS,
  REMOVE_USER
};
