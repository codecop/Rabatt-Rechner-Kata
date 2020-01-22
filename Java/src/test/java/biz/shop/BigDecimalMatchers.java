package biz.shop;

import java.math.BigDecimal;

import org.hamcrest.Description;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeDiagnosingMatcher;

public class BigDecimalMatchers {

    public static Matcher<? super BigDecimal> is(final BigDecimal value) {
        return new TypeSafeDiagnosingMatcher<BigDecimal>() {
            @Override
            public void describeTo(Description description) {
                description.appendValue(value);
            }

            @Override
            protected boolean matchesSafely(BigDecimal item, Description mismatchDescription) {
                boolean sameValue = value.compareTo(item) == 0;
                if (sameValue) {
                    return true;
                }
                mismatchDescription.appendText("was ").appendValue(item);
                return false;
            }
        };
    }

}
