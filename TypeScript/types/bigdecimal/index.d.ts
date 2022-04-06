declare module 'bigdecimal' {
    // minimal, incomplete typing

    export class BigDecimal {
        constructor(n: number | string);
        add(o: BigDecimal): BigDecimal;
        multiply(o: BigDecimal): BigDecimal;
        divide(o: BigDecimal): BigDecimal;
        compareTo(o: BigDecimal): number;
    }

}
