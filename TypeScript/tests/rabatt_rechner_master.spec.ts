import { BigDecimal } from 'bigdecimal';
import { RabattRechner } from '../src/rabatt_rechner';

describe("Rabatt Rechner Master Tests", () => {
  let calculator: RabattRechner;

  beforeEach(() => {
    calculator = new RabattRechner();
    calculator.addDiscountLevel(new BigDecimal(1000), 3);
  });

  it("should foo", () => {
    expect(true).toBe(true);
  });

  it("shouldGiveNoDiscountForPurchaseBelow1000Eur", () => {
    const purchaseBelow1000Eur = new BigDecimal(275);

    const discount = calculator.discountFor(purchaseBelow1000Eur);

    expect(discount.compareTo(new BigDecimal(0))).toBe(0);
  });

  it("shouldGiveNoDiscountForPurchaseJustBelow1000Eur", () => {
    const purchaseBelow1000Eur = new BigDecimal(999);

    const discount = calculator.discountFor(purchaseBelow1000Eur);

    expect(discount.compareTo(new BigDecimal(0))).toBe(0);
  });

  it("shouldGive3PercentDiscountForPurchaseAbove1000Eur", () => {
    const purchaseAbove1000Eur = new BigDecimal(2000);

    const discount = calculator.discountFor(purchaseAbove1000Eur);

    expect(discount.compareTo(new BigDecimal(60))).toBe(0);
  });

  it("shouldGive3PercentDiscountForPurchaseOfExactly1000Eur", () => {
    const purchaseOfExactly1000Eur = new BigDecimal(1000);

    const discount = calculator.discountFor(purchaseOfExactly1000Eur);

    expect(discount.compareTo(new BigDecimal(30))).toBe(0);
  });

});
