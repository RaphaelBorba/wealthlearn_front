"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ChangeEvent, useState } from "react"

interface IProps {
  data: BrapiResponsePrincipalPage
}

export default function ShowStocks({ data }: IProps) {

  const [search, setSearch] = useState('')

  function filterStocks() {

    if (search.length < 3) {
      return data.stocks.slice(0, 24).map((stock, index) => (
        <StockComponent key={stock.stock} stock={stock} />
      ))
    }
    const filter = data.stocks.filter((stock) => stock.stock.includes(search.toUpperCase()))
    if (filter[0]) {
      return filter.map((stock) => (
        <StockComponent key={stock.stock} stock={stock} />
      ))
    } else {
      return <h1 className="text-primary min-[600px]:text-center size-full text-2xl opacity-70">Nenhuma ação com esse código!</h1>
    }
  }

  return (
    <>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full min-[425px]:w-96 outline-"
        type="text"
        placeholder="PETR4"
      />
      <div className="grid grid-cols-1 min-[600px]:grid-cols-2 md:grid-cols-3 gap-3 ">
        {filterStocks()}
      </div>

    </>
  )
}

interface StockProps {
  stock: Stock
}

const StockComponent = ({ stock }: StockProps) => (
  <Link href={`/bolsa-de-valores/${stock.stock}`} className={cn(buttonVariants({variant:"ghost"}),"h-full text-start justify-start")}>
    <div className="flex flex-row gap-3">
      <Image
        className="rounded-md object-cover"
        src={stock.logo}
        alt="Stock logo"
        width={50}
        height={50}
      />
      <div>
        <h1 className="break-all">{stock.name}</h1>
        <span className="text-primary italic font-thin">{stock.stock}</span>
      </div>
    </div>
  </Link>
)