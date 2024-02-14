import SimpleTaxCalculator from "@/components/shared/Calculators/SimpleTax"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function JurosSimplesPAge() {

  return (
    <main className="wrapper pb-20">

      <div className="calculator">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Calculadora de Juros Simples</CardTitle>
          </CardHeader>
          <CardContent>
            <SimpleTaxCalculator />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <h1 className="text-xl font-bold">Como usar a calculadora de juros simples:</h1>
            <ul className="ml-5 min-[600px]:ml-10">
              <li className="flex gap-2 flex-row">
                <p><b className="text-primary font-bold">1 -{" "}</b>{" "}Preencha o campo Valor inicial</p>
              </li>
              <li className="flex gap-2 flex-row">
                <p><b className="text-primary font-bold">2 -{" "}</b>{" "}Preencha a Taxa de juros anual ou mensal</p>
              </li>
              <li className="flex gap-2 flex-row">
                <p><b className="text-primary font-bold">3 -{" "}</b>{" "}Preencha o campo Período em meses ou anos;</p>
              </li>
              <li className="flex gap-2 flex-row">
                <p><b className="text-primary font-bold">4 -{" "}</b>{" "}Clique em Calcular e veja o resultado.</p>
              </li>
            </ul>
            <h1 className="text-xl font-bold">Oque é Juros Simples</h1>
            <p>Uma calculadora de juros simples é uma ferramenta que permite calcular o valor dos juros gerados em um investimento ou empréstimo com base no princípio do juro simples.</p>
            <p>No juro simples, o valor do juro é calculado apenas sobre o valor principal, ou seja, o valor inicial do empréstimo ou investimento. A fórmula para calcular o juro simples é:</p>
            <strong className="text-primary ml-5 min-[600px]:ml-10">J = P * i * n</strong>
            <ul className="ml-5 min-[600px]:ml-10">
              <li className="flex">
                <strong className="mr-2 w-3 text-primary">J</strong>
                <p className=""> = valor dos juros</p>
              </li>
              <li className="flex">
                <strong className="mr-2 w-3 text-primary">P</strong>
                <p className=""> = valor principal (o valor inicial do empréstimo ou investimento)</p>
              </li>
              <li className="flex">
                <strong className="mr-2 w-3 text-primary">i</strong>
                <p className=""> = taxa de juros (expressa em decimal, por exemplo, uma taxa de 5% seria 0.05)</p>
              </li>
              <li className="flex">
                <strong className="mr-2 w-3 text-primary">n</strong>
                <p className=""> = número de períodos de tempo (como meses ou anos)</p>
              </li>
            </ul>
            <p>Portanto, uma calculadora de juros simples permitiria ao usuário inserir o valor principal, a taxa de juros e o número de períodos de tempo, e então calcularia e exibiria o valor dos juros.</p>
            <p>Essa ferramenta pode ser útil para pessoas que desejam entender melhor o custo de um empréstimo ou o retorno potencial de um investimento.</p>
          </CardFooter>
        </Card>
      </div>

    </main>
  )
}