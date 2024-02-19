import { RSReal } from "@/lib/utils";
import { CalculatorResponse } from "@/types/calculators";
import { Bar, BarChart, Label, ResponsiveContainer, Tooltip, XAxis, YAxis, } from "recharts"

interface IProps {
  data: CalculatorResponse
}

export default function BarChartResponse({ data }: IProps) {

  return (
    <div className="h-[300px] min-[600px]:h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%" >
        <BarChart
          width={500}
          height={400}
          data={data.timeTaxs}
        >
          <XAxis dataKey="time">
            <Label value={data.timeType === "year" ? "Ano" : "Mês"} offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis />

          <Tooltip
            cursor={{ fill: "transparent" }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-background rounded-md flex flex-col justify-around p-4">
                    <div className="flex flex-row gap-3">
                      <h1>{data.timeType === "year" ? "Ano" : "Mês"}:</h1>
                      <h2>{payload[0].payload.time}</h2>
                    </div>
                    <div className="flex flex-row gap-3">
                      <h1 className="text-[#48e383]" >Juros Total:</h1>
                      <h2>{payload[1].value !== undefined ? RSReal.format(Number(payload[1].value)) : ''}</h2>
                    </div>
                    <div className="flex flex-row gap-3">
                      <h1 className="text-primary" >Valor Investido:</h1>
                      <h2>{payload[0].value !== undefined ? RSReal.format(Number(payload[0].value)) : ''}</h2>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Bar dataKey="investedMoney" stackId="a" fill="#3b82f6" />
          <Bar dataKey="totalTax" stackId="a" fill="#48e383" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
