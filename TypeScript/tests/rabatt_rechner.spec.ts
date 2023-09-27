import { BigDecimal } from 'bigdecimal';
import { RabattRechner } from '../src/rabatt_rechner';

describe("Rabatt Rechner", () => {
  let calculator: RabattRechner;

  beforeEach(() => {
    calculator = new RabattRechner();
  });

  const noDiscount = new BigDecimal(0);

  it("should return noDiscount when the purchase amount is 0", () => {
    // Arrange
    const purchase = new BigDecimal(0);

    // Act
    const discount = calculator.discountFor(purchase);

    // Assert
    expect(discount).toEqual(noDiscount);
  });

  it("should return noDiscount when no discount levels have been added", () => {
    // Arrange
    const purchase = new BigDecimal(1000);

    // Act
    const discount = calculator.discountFor(purchase);

    // Assert
    expect(discount).toEqual(noDiscount);
  });

  it("should return the correct discount amount when the purchase amount is equal to a discount level threshold", () => {
    // Arrange
    calculator.addDiscountLevel(new BigDecimal(1000), 10);
    const purchase = new BigDecimal(1000);

    // Act
    const discount = calculator.discountFor(purchase);

    // Assert
    expect(discount).toEqual(purchase.multiply(new BigDecimal(0.1)));
  });

  it("should return the correct discount amount when the purchase amount is greater than a discount level threshold", () => {
    // Arrange
    calculator.addDiscountLevel(new BigDecimal(1000), 10);
    calculator.addDiscountLevel(new BigDecimal(2000), 20);
    const purchase = new BigDecimal(2500);

    // Act
    const discount = calculator.discountFor(purchase);

    // Assert
    expect(discount).toEqual(purchase.multiply(new BigDecimal(0.2)));
  });

  it("should return the correct discount amount when the purchase amount is less than all discount level thresholds", () => {
    // Arrange
    calculator.addDiscountLevel(new BigDecimal(1000), 10);
    calculator.addDiscountLevel(new BigDecimal(2000), 20);
    const purchase = new BigDecimal(500);

    // Act
    const discount = calculator.discountFor(purchase);

    // Assert
    expect(discount).toEqual(noDiscount);
  });

});
