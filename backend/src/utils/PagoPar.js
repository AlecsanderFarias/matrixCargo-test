const crypto = require('crypto');
const axios = require('axios');
const { PAGOPAR_URL } = process.env;

function sha1(data) {}
const PagoPar = {
  generateLinkPay(data) {
    const path = `/comercios/1.1/iniciar-transaccion`;

    return axios.post(path, data, {
      baseURL: PAGOPAR_URL,
    });
  },
  generateHash(data) {
    return crypto.createHash('sha1').update(data, 'binary').digest('hex');
  },
};

module.exports = PagoPar;
