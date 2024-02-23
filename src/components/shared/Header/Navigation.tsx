import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ListItem } from "./ListItem";

const StartComponents: { title: string; href: string; description: string }[] = [
    {
        href:"/acao",
        title:"Ações da Bolsa de Valores",
        description:"Informações das ações da bolsa de valores brasileira!"
    }
]

const CalculatorComponents: { title: string; href: string; description: string }[] = [
    {
        title: "Calculadora de Juros Simples",
        href: "/calculadora/juros-simples",
        description:
            "Juros simples determina os juros gerados por um capital inicial com base na taxa de juros e no período de tempo.",
    },
    {
        title: "Calculadora de Juros Compostos",
        href: "/calculadora/juros-compostos",
        description:
            "Juros compostos estima o crescimento de um capital ao longo do tempo, levando em consideração a taxa de juros e o número de períodos de capitalização, resultando em ganhos que aumentam progressivamente com o tempo.",
    },
    {
        title: "Calculadora de Objetivo Financeiro",
        href: "/calculadora/objetivo-financeiro",
        description:
            "A Calculadora de Objetivo Financeiro estima o tempo para atingir um valor desejado, considerando rendimento anual e investimento inicial. É útil para planejar metas financeiras com diferentes taxas de rendimento.",
    }
]

export default function Navigation(){

    return(
        <div className="hidden min-[600px]:block">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-base">Começo!</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                            {StartComponents.map((component, index) => (
                                                <ListItem
                                                    key={index}
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
                                            {CalculatorComponents.map((component, index) => (
                                                <ListItem
                                                    key={index}
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
    )
}