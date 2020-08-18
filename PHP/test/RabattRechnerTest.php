<?php

namespace Test;

use Brick\Math\BigDecimal;
use PHPUnit\Framework\TestCase;
use Shop\RabattRechner;

class RabattRechnerTest extends TestCase
{

    private $calculator;

    /** @before */
    public function setUpDiscount()
    {
        $this->calculator = new RabattRechner();
        $this->calculator->addDiscountLevel(BigDecimal::of(1000), 3);
    }

    /** test */
    public function foo()
    {
        $this->assertEquals(true, false);
    }

    /** @test */
    public function shouldGiveNoRabattForPurchaseBelow1000Eur()
    {
        $purchaseBelow1000Eur = BigDecimal::of(275);
        $rabatt = $this->calculator->discountFor($purchaseBelow1000Eur);
        $this->assertEquals(BigDecimal::of(0), $rabatt);
    }

    /** @test */
    public function shouldGiveNoRabattForPurchaseJust1000Eur()
    {
        $purchaseBelow1000Eur = BigDecimal::of(999);
        $rabatt = $this->calculator->discountFor($purchaseBelow1000Eur);
        $this->assertEquals(BigDecimal::of(0), $rabatt);
    }

    /** @test */
    public function shouldGive3PercentRabattForPurchaseAbove1000Eur()
    {
        $purchaseAbove1000Eur = BigDecimal::of(2000);
        $rabatt = $this->calculator->discountFor($purchaseAbove1000Eur);
        $this->assertTrue(BigDecimal::of(60)->isEqualTo($rabatt));
    }

    /** @test */
    public function shouldGive3PercentRabattForPurchaseOfExactly1000Eur()
    {
        $purchaseOfExactly1000Eur = BigDecimal::of(1000);
        $rabatt = $this->calculator->discountFor($purchaseOfExactly1000Eur);
        $this->assertTrue(BigDecimal::of(30)->isEqualTo($rabatt));
    }

}
