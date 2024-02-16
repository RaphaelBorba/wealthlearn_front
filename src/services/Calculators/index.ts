import { CalculatorResponse, SimpleTaxCalculator } from "@/types/calculators";
import api from "../api";


export async function postCalculatorSimpleTax(data: SimpleTaxCalculator){

    const response = await api.post<CalculatorResponse>("/calculators/simple-tax", data)

    return response.data
}