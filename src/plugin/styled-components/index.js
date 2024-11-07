const path = require("path");
const pickBy = require("lodash/pickBy");
const identity = require ("lodash/identity");

module.exports = function (context, options) {
  return {
    name: 'styled-components-plugin',
    configureWebpack(config, isServer, utils) {
      return pickBy({
        resolve: {
          alias: {
            "./App": path.resolve(__dirname, 'App.js'),
            "./AppOriginal": path.resolve(__dirname, "../../..", "node_modules/@docusaurus/core/lib/client/App.js")
          }
        },
        entry: isServer && {
          main: path.resolve(__dirname, 'serverEntry.js'),
        }
      }, identity);
    },
  };
};
