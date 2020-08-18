<?php
namespace Shop;

use Brick\Math\BigDecimal;

class RabattRechner
{

    private $noDiscount;
    private $levels;

    public function __construct()
    {
        $this->noDiscount = BigDecimal::zero();
        $this->levels = [];
    }

    public function addDiscountLevel(BigDecimal $threshold, $percentage)
    {
        $decimalPercentage = BigDecimal::of($percentage)
            ->exactlyDividedBy(BigDecimal::of(100));
        array_push($this->levels, new DiscountLevel($threshold, $decimalPercentage));
    }

    public function discountFor(BigDecimal $purchase)
    {
        foreach ($this->levels as $level) {
            if ($purchase->compareTo($level->threshold) >= 0) {
                return $purchase->multipliedBy($level->percentage);
            }
        }
        return $this->noDiscount;
    }

}
