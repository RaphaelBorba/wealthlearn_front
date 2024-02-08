import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LogOut, Menu, User } from "lucide-react"
import SearchField from "./SearchField"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { userData } from "@/stores/userStore"
import { logout } from "@/services/Auth/authService"
import Image from "next/image"

interface IMobileSheet {
  userData: userData
}

export default function MobileSheet({ userData }: IMobileSheet) {

  return (
    <div className="flex min-[600px]:hidden">
      <Sheet >
        <SheetTrigger><Menu /></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Link href="/">
                <Image
                  className="mx-auto"
                  alt="Logo"
                  src="logo-blue.svg"
                  width={200}
                  height={100}
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="pt-5 relative h-full">
            <SearchField />

            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>Começo!</AccordionTrigger>
                <AccordionContent>
                  <SheetClose asChild>
                    <Link href="/" >
                      <Button variant="link">Pagina Inicial</Button>
                    </Link>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Calculadoras</AccordionTrigger>
                <AccordionContent>

                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <SheetFooter className="flex flex-col gap-3 mt-10">
              {
                userData.id !== 0 ?
                  <>
                    <SheetClose asChild>
                      <Link className="w-full" href="/perfil">
                        <Button variant="outline" className="flex gap-5 w-full" >Perfil <User /> </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button onClick={logout} variant="destructive" className="flex gap-5" >Sair da Conta <LogOut /></Button>
                    </SheetClose>
                  </>
                  :

                  <SheetClose asChild>
                    <Link href="/sign-in">
                      <Button className="w-full">Login</Button>
                    </Link>
                  </SheetClose>
              }
            </SheetFooter>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}