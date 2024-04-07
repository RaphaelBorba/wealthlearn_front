import { Separator } from "@/components/ui/separator";
import Image from "next/image";



export default function Footer() {

  return (
    <footer className="max-w-screen bg-primary-foreground py-5 mt-auto ">
      <article className="wrapper">
        <div className="flex flex-row justify-center items-center gap-10 min-[600px]:justify-between">
          <Image alt="Logo" src="/logo-blue.svg" width={200} height={200} />
          <span className="text-end max-[600px]:hidden">Site criado para aprimorar seus conhecimentos <br /> sobre financias e investimentos</span>
        </div>
      </article>
      <Separator />
      <article className="wrapper">
        <div className="grid grid-cols-3">

        </div>
      </article>
    </footer>
  )
}