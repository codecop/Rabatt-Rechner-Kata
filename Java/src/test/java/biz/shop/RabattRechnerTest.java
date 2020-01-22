package biz.shop;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import java.math.BigDecimal;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class RabattRechnerTest {

    private RabattRechner calculator = new RabattRechner();

    @BeforeEach
    void setUpDiscount() {
        calculator.addDiscountLevel(new BigDecimal(1000), 3);
    }

    @Test
    void shouldFoo() {
        assertThat(true, is(false));
    }

}
