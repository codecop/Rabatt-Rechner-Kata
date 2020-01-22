package biz.shop;

import static org.junit.Assert.assertThat;

import java.math.BigDecimal;

import org.hamcrest.Matcher;
import org.junit.Test;

class RabattrechnerTest {

    private Rabattrechner rechner = new Rabattrechner();

    @Test
    void shouldGiveNoRabattForPurchaseBelow1000Eur() {
        BigDecimal purchaseBelow1000Eur = toMoney(275);

        BigDecimal rabatt = rechner.calcRabattFor(purchaseBelow1000Eur);

        assertThat(rabatt, is(0));
    }

    @Test
    void shouldGiveNoRabattForPurchaseJust1000Eur() {
        BigDecimal purchaseBelow1000Eur = toMoney(999);

        BigDecimal rabatt = rechner.calcRabattFor(purchaseBelow1000Eur);

        assertThat(rabatt, is(0));
    }

    @Test
    void shouldGive3PercentRabattForPurchaseAbove1000Eur() {
        BigDecimal purchaseAbove1000Eur = toMoney(2000);

        BigDecimal rabatt = rechner.calcRabattFor(purchaseAbove1000Eur);

        assertThat(rabatt, is(60));
    }

    @Test
    void shouldGive3PercentRabattForPurchaseOfExactly1000Eur() {
        BigDecimal purchaseOfExactly1000Eur = toMoney(1000);

        BigDecimal rabatt = rechner.calcRabattFor(purchaseOfExactly1000Eur);

        assertThat(rabatt, is(30));
    }

    private static BigDecimal toMoney(int euros) {
        return new BigDecimal(euros);
    }

    private Matcher<? super BigDecimal> is(int euros) {
        return BigDecimalMatchers.is(toMoney(euros));
    }

}
