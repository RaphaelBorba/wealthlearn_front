import Image from "next/image";
import { Marcellus_SC } from "next/font/google";

const marcellus = Marcellus_SC({
  weight: ["400"],
  subsets: ["latin"]
})

export default function MainPage() {

  return (
    <main className="wrapper">
      <div className="mt-8 relative flex justify-between w-full min-h-[200px]">
        <Image
          className="hidden min-[600px]:block"
          alt="Green Arrow"
          src="/green-arrow.png"
          width={400}
          height={400}
        />
        <div className="text-center absolute flex flex-col gap-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          <h1 className={`text-5xl min-[600px]:text-7xl font-bold text-primary ${marcellus.className}`}>WEALTHLEARN</h1>
          <span
            className="text-base min-[600px]:text-lg font-bold"
          >
            Aqui você aprende na prática tudo sobre <br />investimentos e finâncias
          </span>

        </div>
        <Image
          className="hidden min-[600px]:block"
          alt="red Arrow"
          src="/red-arrow.png"
          width={400}
          height={400}
        />
        <div
          className={`z-20 hidden min-[600px]:block absolute top-1/2 left-1/2 transform -translate-x-1/2
                    -translate-y-1/2 w-[600px] h-[500px] bg-background blur-2xl`} />
      </div>


    </main>
  )
}