var forEachEls = require("./foreach-els");

module.exports = function(selectors, cb, context, DOMcontext) {
  DOMcontext = DOMcontext || document;
  selectors.forEach(function(selector) {
    forEachEls(DOMcontext.querySelectorAll(selector), cb, context);
  });
};
