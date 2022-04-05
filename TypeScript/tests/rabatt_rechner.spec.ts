import { BigDecimal } from 'bigdecimal';
import { RabattRechner } from '../src/rabatt_rechner';

describe("Rabatt Rechner", () => {
  let calculator: RabattRechner;

  beforeEach(() => {
    calculator = new RabattRechner();
    calculator.addDiscountLevel(new BigDecimal(1000), 3);
  });

  it("should foo", () => {
    expect(true).toBe(false);
  });

});
