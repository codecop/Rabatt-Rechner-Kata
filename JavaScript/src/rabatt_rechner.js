var bigdecimal = require("bigdecimal");
// https://github.com/iriscouch/bigdecimal.js

/**
 * @param {bigdecimal.BigDecimal} threshold
 * @param {bigdecimal.BigDecimal} percentage
 */
function DiscountLevel(threshold, percentage) {
  this.threshold = threshold;
  this.percentage = percentage;
}

function Rabattrechner() {
  this.noRabatt = new bigdecimal.BigDecimal(0);
  this.levels = [];
}

/**
 * @param {bigdecimal.BigDecimal} threshold
 * @param {number} percentage
 */
Rabattrechner.prototype.addDiscountLevel = function(threshold, percentage) {
  /** @type {bigdecimal.BigDecimal} */
  var percentageValue = new bigdecimal.BigDecimal(percentage).divide(new bigdecimal.BigDecimal(100));
  this.levels.push(new DiscountLevel(threshold, percentageValue));
};

/**
 * @param {bigdecimal.BigDecimal} purchase
 */
Rabattrechner.prototype.calcRabattFor = function(purchase) {
  for (var i = 0; i < this.levels.length; i++) {
    if (purchase.compareTo(this.levels[i].threshold) >= 0) {
      return purchase.multiply(this.levels[i].percentage);
    }
  }
  return this.noRabatt;
};

module.exports = {
  Rabattrechner
};
