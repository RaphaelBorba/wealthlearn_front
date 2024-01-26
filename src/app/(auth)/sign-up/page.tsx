"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form"
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { createNewUser } from "@/services/Auth/authService";
import { useToast } from "@/components/ui/use-toast";

const formZodSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
})

type SignInType = z.infer<typeof formZodSchema>

export default function SignUpPage() {

    const {toast} = useToast()
    const form = useForm<SignInType>({
        defaultValues:{
            email:'',
            name:'',
            password:''
        },
        resolver: zodResolver(formZodSchema)
    })

    const onSubmit = async (data: SignInType) => {
        
        try {

            await createNewUser(data)

            toast({
                description:"Welcome aboard! Your account has been successfully created."
            })
            
            
        } catch (error:any) {

            console.log(error)
            const message = error.response.data.message
            toast({
                title:"Uh oh! Something went wrong!",
                description: Array.isArray(message) ? message[0] : message,
                variant:"destructive"
            })
            
        }
        
        
    }

    return (

        <main className="h-screen flex justify-center items-center gap-10">
            <section className="text-center flex flex-col max-w-lg items-center">
                <Image
                    src="/authHero.png"
                    alt="Hero Auth"
                    width={500}
                    height={500}
                />
                <h1 className="text-muted-foreground text-3xl"><b className="text-primary">WealthLearn</b>: A new way to learn to invest!</h1>
                <span className="text-muted-foreground mt-4">Here you can see how investments work over time.</span>
            </section>
            <article className="max-w-lg w-full">

                <h1 className="text-center">LOGO</h1>
                <Form {...form}>
                    <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(onSubmit)}>

                        {/* USERNAME */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            className="outline-none"
                                            placeholder="Username"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            className="outline-none"
                                            placeholder="Email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            className="outline-none"
                                            placeholder="Password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </article>
        </main>

    )
}