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

  function returnBRDate() {

    let dataISO = stockData.regularMarketTime

    let data = new Date(dataISO);

    let dia = data.getDate();
    let mes = data.getMonth() + 1; // Lembrando que os meses começam em 0, então somamos 1
    let ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }


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

            <span
              className={cn(buttonVariants({ variant: "secondary" }), 'w-full')}>
              <Building2 className="mr-2" />
              Setor: {stockData.summaryProfile?.sector}
            </span>
            {
              stockData.summaryProfile?.phone && (
                <span
                  className={cn(buttonVariants({ variant: "secondary" }), 'w-full')}>
                  <Phone className="mr-2" />
                  Contato: {stockData.summaryProfile?.phone}
                </span>
              )
            }
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
      <div className="mt-8 max-[220px]:overflow-scroll">
        <h1 className="text-2xl underline">Informações do ativo:</h1>
        <Table className="">
          <TableBody>
            <TableRow>
              <TableCell>Moeda Negociada:</TableCell>
              <TableCell className="text-end">{stockData.currency}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Data e Hora da Última Negociação:</TableCell>
              <TableCell className="text-end">{returnBRDate()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Preço atual da Ação:</TableCell>
              <TableCell className="text-end">{stockData.regularMarketPrice}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Preço Máximo do dia da Ação:</TableCell>
              <TableCell className="text-end">{stockData.regularMarketDayHigh}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Preço Mínimo do dia da Ação:</TableCell>
              <TableCell className="text-end">{stockData.regularMarketDayLow}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Volume Negociado Hoje:</TableCell>
              <TableCell className="text-end">{stockData.regularMarketVolume}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Preço Máximo das Últimas 52 Semanas:</TableCell>
              <TableCell className="text-end">{stockData.fiftyTwoWeekHigh}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Preço Mínimo das Últimas 52 Semanas:</TableCell>
              <TableCell className="text-end">{stockData.fiftyTwoWeekLow}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {stockData.summaryProfile?.longBusinessSummary && (
        <div className="flex flex-col gap-5 mt-8">
          <h1 className="text-2xl underline">História da Empresa:</h1>
          <span>{stockData.summaryProfile?.longBusinessSummary}</span>
        </div>
      )}

    </main>
  )
}