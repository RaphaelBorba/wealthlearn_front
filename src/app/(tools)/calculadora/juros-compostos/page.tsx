'use client'
import CompostTaxCalculator from "@/components/shared/Calculators/CompostTax/CompostTaxForm"
import { ShowResponse } from "@/components/shared/Calculators/ShowResponse"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CalculatorResponse } from "@/types/calculators"
import { useState } from "react"

export default function JurosCompostosPage() {

  const [calculatorResponse, setCalculatorResponse] = useState<null | CalculatorResponse>(null)

  return (
    <main className="wrapper pb-20">

      <div className="calculator">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Calculadora de Juros Compostos</CardTitle>
          </CardHeader>
          <CardContent>
            <CompostTaxCalculator setCalculatorResponse={setCalculatorResponse} />
          </CardContent>
          {
            calculatorResponse === null ?
              <CardFooter className="flex flex-col items-start gap-4">
                <h1 className="text-xl font-bold">Como usar a calculadora de juros compostos:</h1>
                <ul className="ml-5 min-[600px]:ml-10">
                  <li className="flex gap-2 flex-row">
                    <p><b className="text-primary font-bold">1 -{" "}</b>{" "}Preencha o campo Valor Inicial</p>
                  </li>
                  <li className="flex gap-2 flex-row">
                    <p><b className="text-primary font-bold">2 -{" "}</b>{" "}Preencha o campo Valor Mensal</p>
                  </li>
                  <li className="flex gap-2 flex-row">
                    <p><b className="text-primary font-bold">3 -{" "}</b>{" "}Preencha a Taxa de juros anual ou mensal</p>
                  </li>
                  <li className="flex gap-2 flex-row">
                    <p><b className="text-primary font-bold">4 -{" "}</b>{" "}Preencha o campo Período em meses ou anos;</p>
                  </li>
                  <li className="flex gap-2 flex-row">
                    <p><b className="text-primary font-bold">5 -{" "}</b>{" "}Clique em Calcular e veja o resultado.</p>
                  </li>
                </ul>
                <h1 className="text-xl font-bold">O que é Juros Compostos</h1>
                <p>Uma calculadora de juros compostos é uma ferramenta que permite calcular o valor acumulado de um investimento ao longo do tempo, levando em consideração o efeito dos juros sobre juros.</p>
                <p>No juro composto, o valor do juro é calculado não apenas sobre o valor principal, mas também sobre os juros acumulados em períodos anteriores. A fórmula para calcular o juro composto é:</p>
                <strong className="text-primary ml-5 min-[600px]:ml-10">A = P * (1 + r)^n</strong>
                <ul className="ml-5 min-[600px]:ml-10">
                  <li className="flex">
                    <strong className="mr-2 w-3 text-primary">A</strong>
                    <p className=""> = valor acumulado (incluindo o principal e os juros acumulados)</p>
                  </li>
                  <li className="flex">
                    <strong className="mr-2 w-3 text-primary">P</strong>
                    <p className=""> = valor principal (o valor inicial do investimento)</p>
                  </li>
                  <li className="flex">
                    <strong className="mr-2 w-3 text-primary">r</strong>
                    <p className=""> = taxa de juros (expressa em decimal, por exemplo, uma taxa de 5% seria 0.05)</p>
                  </li>
                  <li className="flex">
                    <strong className="mr-2 w-3 text-primary">n</strong>
                    <p className=""> = número de períodos de tempo (como meses ou anos)</p>
                  </li>
                </ul>
                <p>Portanto, uma calculadora de juros compostos permitiria ao usuário inserir o valor principal, a taxa de juros e o número de períodos de tempo, e então calcularia e exibiria o valor acumulado ao longo do tempo.</p>
                <p>Essa ferramenta pode ser útil para pessoas que desejam entender melhor o crescimento de um investimento ao longo do tempo e o efeito dos juros sobre o saldo acumulado.</p>

              </CardFooter>
              :
              <CardFooter className="flex flex-col">
                <ShowResponse data={calculatorResponse} />
              </CardFooter>
          }
        </Card>
      </div>

    </main>
  )
}