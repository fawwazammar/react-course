import BaseService from './baseService';
import API from '../config/rest';

const getProduk = () => {
  return BaseService.get(API.PRODUK, {
    params: {
      limit: 10,
      offset: 0,
      search: 'bango',
    },
  });
};

export default { getProduk };
