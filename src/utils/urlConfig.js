const getAllProducts = () => '/api/v1/products/all';
const getProduct = (id) => `/api/v1/product/${id}`;

const getLogoutUserUrl = () => '/api/v1/logout';

module.exports = {
  getAllProducts,
  getProduct,
  getLogoutUserUrl
}