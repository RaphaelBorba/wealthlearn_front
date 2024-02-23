import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CalculatorResponse } from "@/types/calculators"
import BarChartResponse from "./BarChartResponse"
import { TableResponse } from "./TableResponse"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { RSReal } from "@/lib/utils"

interface IProps {
  data: CalculatorResponse
}

export function ShowResponse({ data }: IProps) {
  return (
    <>
      <div className="w-full h-fit py-10 flex flex-col justify-center gap-5 min-[846px]:flex-row ">
        <Card className="h-fit pt-5 px-3">
          <CardTitle className="text-center text-xl min-[1090px]:text-2xl">Valor Total Final:</CardTitle>
          <CardContent className="flex justify-center items-center">
            <h1 className="text-xl min-[1090px]:text-3xl mt-3">
              {RSReal.format(data.timeTaxs[data.timeTaxs.length - 1].totalAmount)}
            </h1>
          </CardContent>
        </Card>
        <Card className="h-fit pt-5 px-3">
          <CardTitle className="text-center text-xl min-[1090px]:text-2xl">Valor Total Investido:</CardTitle>
          <CardContent className="flex justify-center items-center">
            <h1 className="text-xl min-[1090px]:text-3xl mt-3 text-primary">
              {RSReal.format(data.timeTaxs[data.timeTaxs.length - 1].investedMoney)}
            </h1>
          </CardContent>
        </Card>
        <Card className="h-fit pt-5 px-3">
          <CardTitle className="text-center text-xl min-[1090px]:text-2xl">Valor Total de Juros:</CardTitle>
          <CardContent className="flex justify-center items-center">
            <h1 className="text-xl min-[1090px]:text-3xl mt-3 text-[#48e383]">
              {RSReal.format(data.timeTaxs[data.timeTaxs.length - 1].totalTax)}
            </h1>
          </CardContent>
        </Card>
        
      </div>
      <Tabs defaultValue="chart" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-5">
          <TabsTrigger value="chart">Gráfico</TabsTrigger>
          <TabsTrigger value="table">Tabela</TabsTrigger>
        </TabsList>
        <TabsContent value="chart">
          <BarChartResponse data={data} />
        </TabsContent>
        <TabsContent value="table" className="w-full max-h-[400px] rounded-md overflow-auto">
            <TableResponse data={data} />
        </TabsContent>
      </Tabs>
    </>
  )
}
