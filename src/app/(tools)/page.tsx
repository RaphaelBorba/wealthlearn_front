import Image from "next/image";
import { Marcellus } from "next/font/google";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import brapiApi from "@/services/brapiApi";
import Link from "next/link";


const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"]
})

export default async function MainPage() {

  const brapiStocks = await brapiApi.get<BrapiResponsePrincipalPage>("/api/quote/list", { params: { limit: 12, type: "stock" } })

  return (
    <main className="wrapper  my-24">
      <div className=" flex flex-col gap-5 size-full justify-center items-center mb-14">
        <h1
          className={`text-4xl min-[430px]:text-6xl min-[530px]:text-7xl font-bold text-primary ${marcellus.className}`}>
          WEALTHLEARN
        </h1>
        <span className="font-bold text-center">Consulte informações de seus ativos e utilize nossas ferramentas!</span>
      </div>

      <section>
        <Card>
          <CardHeader className="text-center md:text-start">
            <CardTitle>
              <Link href={"/bolsa-de-valores"} className="hover:underline">
                Ações da Bolsa de Valores
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {brapiStocks.data.stocks.map((stock, index) => (
              <div key={stock.name}>
                <Link
                  className="flex flex-col justify-center items-center gap-2 hover:scale-105 transition w-fit mx-auto"
                  href={`/bolsa-de-valores/${stock.stock}`}>
                  <Image
                    className="rounded-md"
                    alt="Logo Stock"
                    src={stock.logo}
                    width={60}
                    height={60}
                  />
                  <h1 className="font-bold">{stock.stock}</h1>
                </Link>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  )
}