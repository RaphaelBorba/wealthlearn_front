import { CalculatorResponse, CompostTaxCalculator, FinancialGoalRequest, FinancialGoalResponse, SimpleTaxCalculator } from "@/types/calculators";
import backendApi from "../backendApi";


export async function postCalculatorSimpleTax(data: SimpleTaxCalculator){

    const response = await backendApi.post<CalculatorResponse>("/calculators/simple-tax", data)

    return response.data
}

export async function postCalculatorCompostTax(data:CompostTaxCalculator){

    const response = await backendApi.post<CalculatorResponse>("/calculators/compost-tax", data)

    return response.data
}

export async function postCalculatorFinancialGoal(data:FinancialGoalRequest){

    const response = await backendApi.post<FinancialGoalResponse>("/calculators/financial-goal", data)

    return response.data
}