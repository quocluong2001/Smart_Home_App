const axios = require('axios');

const setIOkey = (token) => {
  if (token) {
    axios.defaults.headers.common['X-AIO-Key'] = token;
  } else {
    delete axios.defaults.headers.common['X-AIO-Key'];
  }
};

module.exports = setIOkey;
