/* global HTMLCollection: true */

module.exports = function(els, fn, context) {
  if (
    els instanceof HTMLCollection ||
    els instanceof NodeList ||
    els instanceof Array
  ) {
    return Array.prototype.forEach.call(els, fn, context);
  }
  // assume simple DOM element
  return fn.call(context, els);
};
