
export type SimpleTaxCalculator = {
    amount: number;
    tax: number;
    time: number;
    typeTax: 'year' | 'month';
    typeTime: 'year' | 'month';
}

export type CalculatorResponse = {
    timeType: 'year' | 'month';
    timeTaxs: 
        {
            tax: number;
            time: number;
            amount: number;
            totalTax: number;
        }[]
    
}