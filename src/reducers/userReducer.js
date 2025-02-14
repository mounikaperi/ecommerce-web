const { LOGIN_USER, REGISTER_USER, LOAD_USER, LOGOUT_USER, CLEAR_ERRORS, UPDATE_PROFILE, UPDATE_PASSWORD, UPDATE_USER, DELETE_USER, FORGOT_PASSWORD, RESET_PASSWORD, ALL_USERS, USER_DETAILS, REMOVE_USER } = require("../constants/userConstants");

const userReducer = ({ type, payload }, state = { user: {}}) => {
  switch (type) {
    case LOGIN_USER.LOGIN_USER_REQUEST:
    case REGISTER_USER.REGISTER_USER_REQUEST:
    case LOAD_USER.LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false
      };
    case LOGIN_USER.LOGIN_USER_SUCCESS:
    case REGISTER_USER.REGISTER_USER_SUCCESS:
    case LOAD_USER.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: payload
      };
    case LOGOUT_USER.LOGOUT_USER_SUCCESS: 
      return {
        loading: false,
        user: null,
        isAuthenticated: false
      }
    case LOGIN_USER.LOGIN_USER_FAIL:
    case REGISTER_USER.REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: payload
      };
    case LOAD_USER.LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: payload
      };
    case LOGOUT_USER.LOGOUT_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

const profileReducer = ({type, payload},state = {}) => {
  switch (type) {
    case UPDATE_PROFILE.UPDATE_PROFILE_REQUEST:
    case UPDATE_PASSWORD.UPDATE_PASSWORD_REQUEST:
    case UPDATE_USER.UPDATE_USER_REQUEST:
    case DELETE_USER.DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case UPDATE_PROFILE.UPDATE_PROFILE_SUCCESS:
    case UPDATE_PASSWORD.UPDATE_PASSWORD_SUCCESS:
    case UPDATE_USER.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: payload
      };
    case DELETE_USER.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: payload
      };
    case UPDATE_PROFILE.UPDATE_PROFILE_FAIL:
    case UPDATE_PASSWORD.UPDATE_PASSWORD_FAIL:
    case UPDATE_USER.UPDATE_USER_FAIL:
    case DELETE_USER.DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case UPDATE_PROFILE.UPDATE_PROFILE_RESET:
    case UPDATE_PASSWORD.UPDATE_PASSWORD_RESET:
    case UPDATE_USER.UPDATE_USER_RESET:
      return {
        ...state,
        isUpdated: false
      };
    case DELETE_USER.DELETE_USER_RESET:
      return {
        ...state,
        isDeleted: false
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

const forgotPasswordReducer = ({type, payload}, state={}) => {
  switch (type) {
    case FORGOT_PASSWORD.FORGOT_PASSWORD_REQUEST:
    case RESET_PASSWORD.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FORGOT_PASSWORD.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload
      };
    case RESET_PASSWORD.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: payload
      };
    case FORGOT_PASSWORD.FORGOT_PASSWORD_FAIL:
    case RESET_PASSWORD.RESET_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

const allUsersReducer = ({ type, payload}, state={users: []}) => {
  switch (type) {
    case ALL_USERS.ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ALL_USERS.ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload
      };
    case ALL_USERS.ALL_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

const userDetailsReducer = ({type, payload}, state={user: {}}) => {
  switch (type) {
    case USER_DETAILS.USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case USER_DETAILS.USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload
      };
    case USER_DETAILS.USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case REMOVE_USER.REMOVE_USER_DETAILS:
      return {
        ...state,
        user: {}
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

module.exports = {
  userReducer,
  profileReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer
};
