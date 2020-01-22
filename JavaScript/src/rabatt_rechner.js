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

function RabattRechner() {
  this.noDiscount = new bigdecimal.BigDecimal(0);
  this.levels = [];
}

/**
 * @param {bigdecimal.BigDecimal} threshold
 * @param {number} percentage
 */
RabattRechner.prototype.addDiscountLevel = function(threshold, percentage) {
  /** @type {bigdecimal.BigDecimal} */
  var decimalPercentage = new bigdecimal.BigDecimal(percentage).divide(new bigdecimal.BigDecimal(100));
  this.levels.push(new DiscountLevel(threshold, decimalPercentage));
};

/**
 * @param {bigdecimal.BigDecimal} purchase
 */
RabattRechner.prototype.discountFor = function(purchase) {
  for (var i = 0; i < this.levels.length; i++) {
    if (purchase.compareTo(this.levels[i].threshold) >= 0) {
      return purchase.multiply(this.levels[i].percentage);
    }
  }
  return this.noDiscount;
};

module.exports = {
  RabattRechner: RabattRechner
};
