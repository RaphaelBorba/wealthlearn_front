"use client"
import { Button } from "../../ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { Label } from "../../ui/label";
import { LogOut, Settings, SunMoon, UserRound } from "lucide-react";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Separator } from "../../ui/separator";
import { ifTokenInvalidDisconnect, logout } from "@/services/Auth/authService";
import Link from "next/link";
import { userStore } from "@/stores/userStore";
import SearchField from "./SearchField";
import Navigation from "./Navigation";
import MobileSheet from "./MobileSheet";


export default function Header() {

  const { userData } = userStore()
  const { setTheme, theme } = useTheme()
  function setThemeHeader() {
    if (theme === "dark") return setTheme("light")
    else return setTheme("dark")
  }
  const [popoverOpen, setPopoverOpen] = useState(false)

  useEffect(() => {
    const asyncFunction = async () => {
      await ifTokenInvalidDisconnect(userData.token)
    }
    asyncFunction()
  })

  return (
    <header className=" w-screen max-w-full h-20 bg-muted fixed top-0 left-0 shadow-lg z-50">
      <div className="wrapper h-full flex flex-row items-center justify-between gap-5">
        <div className="flex flex-row gap-5 items-center">
          <Link href="/">
            <Image
              alt="Logo"
              src="/logo-blue.svg"
              width={120}
              height={100}
            />
          </Link>
          <Navigation />
          <div className="hidden min-[900px]:block">
            <SearchField />
          </div>
        </div>

        <div className="hidden min-[600px]:flex flex-row gap-8 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Label htmlFor="theme_mode" ><SunMoon /></Label>
            <Switch onCheckedChange={setThemeHeader} id="theme_mode" />
          </div>
          {
            userData.id === 0 ?
              <Link
                href="/sign-in"
                className="font-bold hover:underline"
              >
                Login
              </Link>
              :
              <Popover >
                <PopoverTrigger>
                  <Settings className="cursor-pointer hover:scale-110 transition duration-200" />
                </PopoverTrigger>
                <PopoverContent className="mt-2 w-40 gap-3 flex flex-col">
                  <PopoverClose asChild>
                    <Link href="/perfil">
                      <Button variant="ghost"
                        className="flex font-bold gap-4 w-full justify-between"
                      >
                        Perfil <UserRound />
                      </Button>
                    </Link>
                  </PopoverClose>
                  <Separator />
                  <Button
                    variant="ghost"
                    onClick={logout}
                    className="flex font-bold gap-4 text-destructive hover:text-destructive justify-between"
                  >
                    Sair <LogOut />
                  </Button>
                </PopoverContent>
              </Popover>
          }

        </div>

        <MobileSheet userData={userData} />
      </div>
    </header>
  )
}