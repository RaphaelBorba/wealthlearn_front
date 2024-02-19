import { CalculatorResponse, CompostTaxCalculator, SimpleTaxCalculator } from "@/types/calculators";
import api from "../api";


export async function postCalculatorSimpleTax(data: SimpleTaxCalculator){

    const response = await api.post<CalculatorResponse>("/calculators/simple-tax", data)

    return response.data
}

export async function postCalculatorCompostTax(data:CompostTaxCalculator){

    const response = await api.post<CalculatorResponse>("/calculators/compost-tax", data)

    return response.data
}