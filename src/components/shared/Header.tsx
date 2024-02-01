"use client"
import { Search, Settings } from "lucide-react";
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
import { Switch } from "@/components/ui/switch"
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Label } from "../ui/label";
import { useTheme } from "next-themes";


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    }
]

export default function Header() {

    const {setTheme, theme} = useTheme()
    function setThemeHeader(){
        if(theme === "dark") return setTheme("light")
        else return setTheme("dark")
    }

    return (
        <header className=" w-screen max-w-full h-20 bg-muted fixed top-0 left-0 shadow-lg">
            <div className="wrapper h-full flex flex-row items-center justify-around gap-5">
                <div className="flex flex-row gap-5 items-center">
                    <Image
                        alt="Logo"
                        src={theme==="light" ? "/logo-dark.svg": "/logo-light.svg"}
                        width={120}
                        height={100}
                    />
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

                <div className="flex flex-row bg-background max-w-[400px] w-full border border-l-2 rounded-md">
                    <Input
                        placeholder="Procure um investimento..."
                        className="outline-none rounded-md border-none"
                    />
                    <Button variant="link" className="border-none group">
                        <Search className="size-4 group-hover:scale-110 transition duration-200" />
                    </Button>
                </div>
                <div className="flex flex-row gap-8 items-center">
                    <div className="flex flex-row gap-2 items-center">
                        <Label htmlFor="theme_mode" >Trocar de Tema</Label>
                        <Switch onCheckedChange={setThemeHeader} id="theme_mode" />
                    </div>
                    <Settings className="cursor-pointer text-primary hover:scale-110 transition duration-200" />
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