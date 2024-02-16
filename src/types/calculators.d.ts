
export type SimpleTaxCalculator = {
    amount: number;
    tax: number;
    time: number;
    typeTax: 'year' | 'month';
    typeTime: 'year' | 'month';
}

export type CalculatorResponse = {
    timeType: 'year' | 'month';
    timeTax: 
        {
            tax: number;
            time: number;
            totalAmount: number;
            totalTax: number;
        }[]
    
}