import ErrorText from "@/components/shared/ErrorMessages/ErrorText"
import { buttonVariants } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

import { cn } from "@/lib/utils"
import brapiApi from "@/services/brapiApi"
import { Building2, Link as LinkIcon, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface IProps {
  params: { stock: string }
}

export default async function StockPage({ params }: IProps) {

  let response
  try {
    response = await brapiApi.get<StockData>(`/api/quote/${params.stock}`, {
      params: {
        modules: "summaryProfile"

      }
    })
  } catch (error) {
    console.log(error)
  }
  if (response === undefined) return <ErrorText message="Erro ao carregar os dados da ação!" />

  const { results, requestedAt } = response.data
  const stockData = results[0]
  

  return (
    <main className="wrapper my-12">
      <div className="grid  min-[600px]:grid-cols-2 gap-5 w-full">

        <div className="flex flex-col text-center min-[600px]:text-start min-[600px]:flex-row gap-3 items-center size-full">
          <Image alt="Logo Ação" src={stockData.logourl} width={100} height={100} className="rounded-md min-w-28 border-[5px] border-foreground" />
          <div className="flex flex-col">
            <h1 className="text-2xl min-[600px]:text-4xl font-bold truncate">{params.stock}</h1>
            <h2 className=" min-[600px]:text-2xl text-primary">{stockData.longName}</h2>
          </div>
        </div>

        <div className="size-full flex justify-center min-[600px]:justify-end  ">
          <div className="flex flex-col items-start gap-3 justify-center max-[600px]:w-full">

            <h1
              className={cn(buttonVariants({ variant: "secondary" }), 'w-full')}>
              <Building2 className="mr-2" />
              Setor: {stockData.summaryProfile?.sector}
            </h1>
            <h1
              className={cn(buttonVariants({ variant: "secondary" }), 'w-full')}>
              <Phone className="mr-2" />
              Contato: {stockData.summaryProfile?.phone}
            </h1>
            {
              stockData.summaryProfile?.website !== undefined && (
                <Link
                  href={stockData.summaryProfile?.website!}
                  target="_blank"
                  className={cn(buttonVariants({ variant: "secondary" }), 'text-primary w-full')}>
                  <LinkIcon className="mr-2" />
                  Site da Empresa
                </Link>
              )
            }
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl">Informações do ativo:</h1>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Preço atual da Ação:</TableCell>
              <TableCell>{results[0].regularMarketPrice}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Moeda Negociada:</TableCell>
              <TableCell>{results[0].currency}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  )
}