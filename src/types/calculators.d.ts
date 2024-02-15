
export type SimpleTaxCalculator = {
    amount: number;
    tax: number;
    time: number;
    typeTax: 'year' | 'month';
    typeTime: 'year' | 'month';
}