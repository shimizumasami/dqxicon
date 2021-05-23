const path = require('path');

module.exports = {
  env: {
    apiEndpoint: 'http://172.30.0.3:3001',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
