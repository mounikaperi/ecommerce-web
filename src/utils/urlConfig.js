const getAllProducts = () => '/api/v1/products/all';
const getProduct = (id) => `/api/v1/product/${id}`;
const getProductsUrl = () => '/api/v1/products';

const getAdminUserUrl = (id) => `/api/v1/admin/user/${id}`;
const getAllUsersUrl = () =>  '/api/v1/admin/users';
const getRegisterUserUrl = () => '/api/v1/register';
const getLogoutUserUrl = () => '/api/v1/logout';
const getLoginUserUrl = () => '/api/v1/login';
const getLoadUserUrl = () => '/api/v1/me';
const getUpdateUserProfileUrl = () => '/api/v1/me/update';
const getUpdateUserPasswordUrl = () => '/api/v1/password/update';
const getForgotUserPasswordUrl = () => '/api/v1/password/forgot';
const getUserResetPasswordUrl = (token) => `/api/v1/password/reset/${token}`;

const getNewReviewUserUrl = () => '/api/v1/review';

const getAddItemToCartUrl = (id) => `/api/v1/product/${id}`;

const getPaymentProcessUrl = () => '/api/v1/payment/process';
const getPaytmProcessUrl = () => 'https://securegw-stage.paytm.in/order/process';
const getPaymentStatusUrl = (id) => `/api/v1/payment/status/${id}`;

const getNewOrderUrl = () => '/api/v1/order/new';
const getMyOrdersUrl = () => '/api/v1/orders/me';
const getAllOrdersUrl = () => '/api/v1/admin/orders';
const getUpdateOrderUrl = (id) => `/api/v1/admin/order/${id}`;
const getDeleteOrderUrl = (id) => `/api/v1/admin/order/${id}`;
const getOrderDetailsUrl = (id) => `/api/v1/order/${id}`;



module.exports = {
  getAllProducts,
  getProduct,
  getProductsUrl,
  getLoginUserUrl,
  getLogoutUserUrl,
  getRegisterUserUrl,
  getNewReviewUserUrl,
  getAddItemToCartUrl,
  getPaymentProcessUrl,
  getPaytmProcessUrl,
  getNewOrderUrl,
  getMyOrdersUrl,
  getOrderDetailsUrl,
  getPaymentStatusUrl,
  getAllOrdersUrl,
  getUpdateOrderUrl,
  getDeleteOrderUrl,
  getLoadUserUrl,
  getUpdateUserProfileUrl,
  getUpdateUserPasswordUrl,
  getForgotUserPasswordUrl,
  getUserResetPasswordUrl,
  getAllUsersUrl,
  getAdminUserUrl
}