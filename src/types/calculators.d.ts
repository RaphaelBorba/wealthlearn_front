
export type SimpleTaxCalculator = {
    amount: number;
    tax: number;
    time: number;
    typeTax: 'year' | 'month';
    typeTime: 'year' | 'month';
}

export type CompostTaxCalculator = SimpleTaxCalculator & {
    monthValue: number
}

export type CalculatorResponse = {
    timeType: 'year' | 'month';
    timeTaxs:
    {
        tax: number;
        time: number;
        investedMoney: number;
        totalTax: number;
        totalAmount: number;
    }[]

}

export type FinancialGoalRequest = {
    amount:number;
    tax:number;
    goal:number
}

export type FinancialGoalResponse = {
    goal: number,
    values: number[][]
}