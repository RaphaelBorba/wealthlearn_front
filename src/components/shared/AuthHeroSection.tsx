import Image from "next/image";


export default function AuthHeroSection(){

    return(
        <section className="text-center flex flex-col max-w-lg items-center">
        <Image
            src="/authHero.png"
            alt="Hero Auth"
            width={500}
            height={500}
        />
        <h1 className="text-muted-foreground text-3xl"><b className="text-primary">WealthLearn</b>: Uma nova forma para aprender a investir!</h1>
        <span className="text-muted-foreground mt-4">Aqui você pode ver como os investimentos funcionam com o tempo.</span>
    </section> 
    )
}