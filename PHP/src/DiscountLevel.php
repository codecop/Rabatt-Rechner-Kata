<?php
namespace Shop;

use Brick\Math\BigDecimal;

class DiscountLevel
{
    public $threshold;
    public $percentage;

    public function __construct(BigDecimal $threshold, BigDecimal $percentage)
    {
        $this->threshold = $threshold;
        $this->percentage = $percentage;
    }
}
