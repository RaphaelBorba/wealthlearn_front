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
import { FinancialGoalResponse } from "@/types/calculators"

export default function FinancialGoalTable({ goal, values }: FinancialGoalResponse) {

  const contributions = [
    50, 100, 200, 300, 400, 500, 1000, 2000, 3000, 5000, 10000, 15000, 20000,
    30000, 50000,
  ];
  const years = [10, 15, 20, 25, 30, 35, 40];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Aportes</TableHead>
          {years.map((year) => <TableHead key={year}>{year} ano</TableHead>)}
        </TableRow>
      </TableHeader>
      <TableBody>
        {values.map((list, index) => (
          <TableRow key={index}>
            <TableCell>{RSReal.format(contributions[index])}</TableCell>
            {list.map((returns) => <TableCell className={`${returns >= goal && "text-green-500"}`} key={returns}>{RSReal.format(returns)}</TableCell>)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}