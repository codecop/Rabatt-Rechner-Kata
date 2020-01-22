var expect = require('chai').expect;
var bigdecimal = require("bigdecimal");
var rr = require('../src/rabatt_rechner.js');

describe("Rabattrechner", function() {
  var rechner;

  this.beforeEach(function() {
    rechner = new rr.Rabattrechner();
    rechner.addDiscountLevel(new bigdecimal.BigDecimal(1000), 3);
  });

  it("should foo", function() {
    expect(true).to.equal(false);
  });

});
