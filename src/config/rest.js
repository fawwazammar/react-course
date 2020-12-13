export default {
  LOGIN: '/api/login',
  PRODUK: '/api/product',
  REGISTER: 'auth/register',
  USERBYID: (userId) => {
    return `users/${userId}`;
  },
};
