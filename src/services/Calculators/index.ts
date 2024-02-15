import { SimpleTaxCalculator } from "@/types/calculators";
import api from "../api";


export async function postCalculatorSimpleTax(data: SimpleTaxCalculator){

    const response = await api.post("/calculators/simple-tax", data)

    return response.data
}