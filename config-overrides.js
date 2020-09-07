const { useBabelRc, override } = require("customize-cra");
const { alias, configPaths } = require("react-app-rewire-alias");

function aliasOverride(config) {
  alias({ ...configPaths("tsconfig.paths.json") })(config);
  return config;
}

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc(), aliasOverride);
