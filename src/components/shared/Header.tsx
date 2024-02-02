"use client"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { LogOut, Menu, Search, Settings, SunMoon, UserRound } from "lucide-react";

import React, { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Separator } from "../ui/separator";
import { ifTokenInvalidDisconnect, logout } from "@/services/Auth/authService";
import Link from "next/link";
import { userStore } from "@/stores/userStore";
import { validateJWTToken } from "@/services/JWT/JWTFunctions";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    }
]

export default function Header() {

    const { userData, setUserData } = userStore()
    const { setTheme, theme } = useTheme()
    function setThemeHeader() {
        if (theme === "dark") return setTheme("light")
        else return setTheme("dark")
    }

    useEffect(() => {
        const asyncFunction = async () => {
            await ifTokenInvalidDisconnect(userData.token)
        }

        asyncFunction()
    })

    return (
        <header className=" w-screen max-w-full h-20 bg-muted fixed top-0 left-0 shadow-lg">
            <div className="wrapper h-full flex flex-row items-center justify-between gap-5">
                <div className="flex flex-row gap-5 items-center">
                    <Image
                        alt="Logo"
                        src="/logo-blue.svg"
                        width={120}
                        height={100}
                    />
                    <div className="hidden min-[580px]:block">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-base">Começo!</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                            {components.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-base">Calculadoras</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                            {components.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="hidden min-[900px]:flex flex-row bg-background max-w-[400px] w-full border border-l-2 rounded-md">
                        <Input
                            placeholder="Procure um investimento..."
                            className="outline-none rounded-md border-none"
                        />
                        <Button variant="link" className="border-none group">
                            <Search className="size-4 group-hover:scale-110 transition duration-200" />
                        </Button>
                    </div>
                </div>

                <div className="hidden min-[580px]:flex flex-row gap-8 items-center">
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
                            <Popover>
                                <PopoverTrigger>
                                    <Settings className="cursor-pointer hover:scale-110 transition duration-200" />
                                </PopoverTrigger>
                                <PopoverContent className="mt-2 w-40 gap-3 flex flex-col">
                                    <Button variant="ghost"
                                        className="flex font-bold gap-4 w-full justify-between"
                                    >
                                        Perfil <UserRound />
                                    </Button>
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

                <div className="flex min-[580px]:hidden">
                    <Sheet >
                        <SheetTrigger><Menu /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"