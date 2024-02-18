import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { RSReal } from "@/lib/utils"
import { CalculatorResponse } from "@/types/calculators"

interface IProps {
    data: CalculatorResponse
  }
  

export function TableResponse({data}:IProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">{data.timeType === "year" ? "Ano":"Mês"}</TableHead>
                    <TableHead>Juros</TableHead>
                    <TableHead>Valor Investido</TableHead>
                    <TableHead>Juros Total</TableHead>
                    <TableHead>Valor Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.timeTaxs.map((tax, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{tax.time}</TableCell>
                        <TableCell>{RSReal.format(tax.tax)}</TableCell>
                        <TableCell>{RSReal.format(tax.amount)}</TableCell>
                        <TableCell>{RSReal.format(tax.totalTax)}</TableCell>
                        <TableCell>{RSReal.format(tax.totalTax + tax.amount)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
