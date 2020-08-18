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

    /** @test */
    public function foo()
    {
        $this->assertTrue(BigDecimal::of(0)->isEqualTo(BigDecimal::of(1)));
    }

}
