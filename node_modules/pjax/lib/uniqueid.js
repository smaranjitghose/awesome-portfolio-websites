module.exports = (function() {
  var counter = 0;
  return function() {
    var id = "pjax" + new Date().getTime() + "_" + counter;
    counter++;
    return id;
  };
})();
