package biz.shop;

import java.math.BigDecimal;

public class Rabattrechner {

    private final BigDecimal noRabatt = BigDecimal.ZERO;
    private final BigDecimal threshold = new BigDecimal(1000);
    private final BigDecimal percentage = new BigDecimal(3).divide(new BigDecimal(100));

    public BigDecimal calcRabattFor(BigDecimal purchase) {
        if (purchase.compareTo(threshold) >= 0) {
            return purchase.multiply(percentage);
        } else {
            return noRabatt;
        }
    }

}
