const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: require("@semantic-ui-react/craco-less"),
      options: {
        lessLoaderOptions: {
          lessOptions: {
            "math": "always"
          },
        },
      },
    },
  ],
};