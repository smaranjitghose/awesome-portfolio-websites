var noop = require("./util/noop");

module.exports = function(request) {
  if (request && request.readyState < 4) {
    request.onreadystatechange = noop;
    request.abort();
  }
};
