import ShowStocks from "@/components/shared/MarketStock/showStocks";
import brapiApi from "@/services/brapiApi";


export default async function StocksPage() {

  let brapiStocks
  try {

    brapiStocks = await brapiApi.get<BrapiResponsePrincipalPage>("/api/quote/list")
  } catch (error) {
    console.log(error)
  }
  return (

    <main className="wrapper my-12 pl-[calc(100vw-100%)]">
      <div className="flex flex-col gap-5">

        <h1 className="text-3xl font-bold">Bolsa de Valores:</h1>
        {
          brapiStocks === undefined ?
            <h1 className="text-primary min-[600px]:text-center size-full text-2xl opacity-70">Ações não encontradas</h1>
            :
            <ShowStocks data={brapiStocks.data} />
        }
      </div>

    </main>
  )
}