import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CalculatorResponse } from "@/types/calculators"
import BarChartResponse from "./BarChartResponse"
import { TableResponse } from "./TableResponse"

interface IProps {
    data: CalculatorResponse
  }

export function ShowResponse({data}:IProps) {
  return (
    <Tabs defaultValue="chart" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="chart">Gráfico</TabsTrigger>
        <TabsTrigger value="table">Tabela</TabsTrigger>
      </TabsList>
      <TabsContent value="chart">
        <BarChartResponse data={data}/>
      </TabsContent>
      <TabsContent className="h-[400px] overflow-scroll" value="table">
        <TableResponse data={data} />
      </TabsContent>
    </Tabs>
  )
}
