import { BigDecimal } from 'bigdecimal';
import { RabattRechner } from '../src/rabatt_rechner';

describe("Rabatt Rechner", () => {
  let calculator: RabattRechner;

  beforeEach(() => {
    calculator = new RabattRechner();
    calculator.addDiscountLevel(new BigDecimal(1000), 3);
  });

  it("should discount for 1000", () => {
    expect(calculator.discountFor(new BigDecimal(1000))).toEqual(new BigDecimal(30));
    // assumes 10 percent instead of 5
  })

  it("should discount for 2000", () => {
    expect(calculator.discountFor(new BigDecimal(2000))).toEqual(new BigDecimal(60));
  })

  // list tests cases for RabattRechner as list in comments:
  // * should discount for 1000
  // * should discount for 2000
  // * should discount for 3000 WTF
  

});
