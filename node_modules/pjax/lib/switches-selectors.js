var forEachEls = require("./foreach-els");

var defaultSwitches = require("./switches");

module.exports = function(
  switches,
  switchesOptions,
  selectors,
  fromEl,
  toEl,
  options
) {
  var switchesQueue = [];

  selectors.forEach(function(selector) {
    var newEls = fromEl.querySelectorAll(selector);
    var oldEls = toEl.querySelectorAll(selector);
    if (this.log) {
      this.log("Pjax switch", selector, newEls, oldEls);
    }
    if (newEls.length !== oldEls.length) {
      throw "DOM doesn’t look the same on new loaded page: ’" +
        selector +
        "’ - new " +
        newEls.length +
        ", old " +
        oldEls.length;
    }

    forEachEls(
      newEls,
      function(newEl, i) {
        var oldEl = oldEls[i];
        if (this.log) {
          this.log("newEl", newEl, "oldEl", oldEl);
        }

        var callback = switches[selector]
          ? switches[selector].bind(
              this,
              oldEl,
              newEl,
              options,
              switchesOptions[selector]
            )
          : defaultSwitches.outerHTML.bind(this, oldEl, newEl, options);

        switchesQueue.push(callback);
      },
      this
    );
  }, this);

  this.state.numPendingSwitches = switchesQueue.length;

  switchesQueue.forEach(function(queuedSwitch) {
    queuedSwitch();
  });
};
