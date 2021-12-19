const path = require('path');

module.exports = {
  env: {
    apiEndpointInner: 'http://host.docker.internal:3002',
    apiEndpointOuter: 'http://localhost:3002',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
