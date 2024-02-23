"use client"
import FinancialGoalCalculator from "@/components/shared/Calculators/FinancialGoal/FinancialGoalForm";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";


export default function FinancialGoalPage() {

  const [calculatorResponse, setCalculatorResponse] = useState<null>(null)

  return (


    <main className="wrapper pb-20">
      <div className="calculator">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Calculadora de Objetivo Financeiro</CardTitle>
          </CardHeader>
          <CardContent>
            <FinancialGoalCalculator/>
          </CardContent>
          {
            calculatorResponse === null ?
              <CardFooter className="flex flex-col items-start gap-4">
                <h1 className="text-xl font-bold">Como usar a Calculadora de Objetivo Financeiro:</h1>
                <ul className="ml-5 min-[600px]:ml-10">
                  <li className="flex gap-2 flex-row">
                    <p><b className="text-primary font-bold">1 -{" "}</b>{" "}Preencha o campo Valor inicial</p>
                  </li>
                  <li className="flex gap-2 flex-row">
                    <p><b className="text-primary font-bold">2 -{" "}</b>{" "}Preencha o campo Rendimento anual</p>
                  </li>
                  <li className="flex gap-2 flex-row">
                    <p><b className="text-primary font-bold">3 -{" "}</b>{" "}Preencha o campo Valor desejado</p>
                  </li>
                  <li className="flex gap-2 flex-row">
                    <p><b className="text-primary font-bold">4 -{" "}</b>{" "}Clique em Calcular e veja o resultado.</p>
                  </li>
                </ul>
                <h1 className="text-xl font-bold">O que é a Calculadora de Objetivo Financeiro?</h1>
                <p>A Calculadora de Objetivo Financeiro é uma ferramenta que permite calcular quanto tempo levará para o usuário alcançar um determinado valor desejado com base no rendimento anual, no valor inicial e no valor dos aportes mensais.</p>
                <p>Essa calculadora utiliza informações como o valor inicial do investimento, o rendimento anual esperado e o valor desejado para determinar o tempo necessário para atingir o objetivo financeiro.</p>
                <p>Essa ferramenta pode ser útil para pessoas que desejam planejar seus investimentos e entender melhor quanto tempo levará para alcançar metas financeiras específicas.</p>
              </CardFooter>
              :
              <CardFooter className="flex flex-col">

              </CardFooter>
          }
        </Card>
      </div>

    </main>
  )


}