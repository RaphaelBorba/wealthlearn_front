import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";


export default function SearchField() {

    return (

        <div className="flex flex-row bg-background max-w-[400px] w-full border border-l-2 rounded-md">
            <Input
                placeholder="Procure um investimento..."
                className="outline-none rounded-md border-none"
            />
            <Button variant="link" className="border-none group">
                <Search className="size-4 group-hover:scale-110 transition duration-200" />
            </Button>
        </div>

    )
}