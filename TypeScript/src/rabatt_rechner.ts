import { BigDecimal } from 'bigdecimal';
// https://github.com/iriscouch/bigdecimal.js

class DiscountLevel {
  public readonly threshold: BigDecimal;
  public readonly percentage: BigDecimal;

  constructor(threshold: BigDecimal, percentage: BigDecimal) {
    this.threshold = threshold;
    this.percentage = percentage;
  }
}

export class RabattRechner {
  private noDiscount: BigDecimal;
  private levels: DiscountLevel[];

  constructor() {
    this.noDiscount = new BigDecimal(0);
    this.levels = [];
  }

  addDiscountLevel(threshold: BigDecimal, percentage: number): void {
    const decimalPercentage = new BigDecimal(percentage).divide(new BigDecimal(100));
    this.levels.push(new DiscountLevel(threshold, decimalPercentage));
  }

  discountFor(purchase: BigDecimal): BigDecimal {
    for (let i = 0; i < this.levels.length; i++) {
      if (purchase.compareTo(this.levels[i].threshold) >= 0) {
        return purchase.multiply(this.levels[i].percentage);
      }
    }
    return this.noDiscount;
  }

}
