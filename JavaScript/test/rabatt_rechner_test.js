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
    expect(true).to.equal(true);
  });

  it("shouldGiveNoDiscountForPurchaseBelow1000Eur", function() {
    var purchaseBelow1000Eur = new bigdecimal.BigDecimal(275);

    var discount = calculator.discountFor(purchaseBelow1000Eur);

    expect(discount.compareTo(new bigdecimal.BigDecimal(0))).to.equal(0);
  });

  it("shouldGiveNoDiscountForPurchaseJust1000Eur", function() {
    var purchaseBelow1000Eur = new bigdecimal.BigDecimal(999);

    var discount = calculator.discountFor(purchaseBelow1000Eur);

    expect(discount.compareTo(new bigdecimal.BigDecimal(0))).to.equal(0);
  });

  it("shouldGive3PercentDiscountForPurchaseAbove1000Eur", function() {
    var purchaseAbove1000Eur = new bigdecimal.BigDecimal(2000);

    var discount = calculator.discountFor(purchaseAbove1000Eur);

    expect(discount.compareTo(new bigdecimal.BigDecimal(60))).to.equal(0);
  });

  it("shouldGive3PercentDiscountForPurchaseOfExactly1000Eur", function() {
    var purchaseOfExactly1000Eur = new bigdecimal.BigDecimal(1000);

    var discount = calculator.discountFor(purchaseOfExactly1000Eur);

    expect(discount.compareTo(new bigdecimal.BigDecimal(30))).to.equal(0);
  });

});
