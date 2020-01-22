package biz.shop;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class RabattRechner {

    private final BigDecimal noDiscount = BigDecimal.ZERO;

    static class DiscountLevel {
        public final BigDecimal threshold;
        public final BigDecimal percentage;

        public DiscountLevel(BigDecimal threshold, BigDecimal percentage) {
            this.threshold = threshold;
            this.percentage = percentage;
        }
    }

    private final List<DiscountLevel> levels = new ArrayList<>();

    public void addDiscountLevel(BigDecimal threshold, int percentage) {
        BigDecimal decimalPercentage = new BigDecimal(percentage)
                .divide(new BigDecimal(100));
        levels.add(new DiscountLevel(threshold, decimalPercentage));
    }

    public BigDecimal discountFor(BigDecimal purchase) {
        for (DiscountLevel level : levels) {
            if (purchase.compareTo(level.threshold) >= 0) {
                return purchase.multiply(level.percentage);
            }
        }
        return noDiscount;
    }

}
