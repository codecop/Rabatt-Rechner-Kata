var expect = require('chai').expect;
var bigdecimal = require("bigdecimal");
var rr = require('../src/rabatt_rechner.js');

describe("Rabatt Rechner", function() {
  var calculator;

  this.beforeEach(function() {
    calculator = new rr.RabattRechner();
    calculator.addDiscountLevel(new bigdecimal.BigDecimal(1000), 3);
  });

  it("should foo", function() {
    expect(true).to.equal(false);
  });

});
