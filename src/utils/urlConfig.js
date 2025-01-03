const getAllProducts = () => '/api/v1/products/all';
const getProduct = (id) => `/api/v1/product/${id}`;
const getProductsUrl = () => '/api/v1/products';

const getLogoutUserUrl = () => '/api/v1/logout';
const getLoginUserUrl = () => '/api/v1/login';

const getRegisterUserUrl = () => '/api/v1/register';

const getNewReviewUserUrl = () => '/api/v1/review';

const getAddItemToCartUrl = (id) => `/api/v1/product/${id}`;

module.exports = {
  getAllProducts,
  getProduct,
  getProductsUrl,
  getLoginUserUrl,
  getLogoutUserUrl,
  getRegisterUserUrl,
  getNewReviewUserUrl,
  getAddItemToCartUrl
}