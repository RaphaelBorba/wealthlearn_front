"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
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
import AuthHeroSection from "@/components/shared/AuthHeroSection";
import Link from "next/link";
import Image from "next/image";

const formZodSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
})

type SignUpType = z.infer<typeof formZodSchema>

export default function SignUpPage() {

    const { toast } = useToast()
    const form = useForm<SignUpType>({
        defaultValues: {
            email: '',
            name: '',
            password: ''
        },
        resolver: zodResolver(formZodSchema)
    })

    const onSubmit = async (data: SignUpType) => {
        try {

            await createNewUser(data)
            toast({
                description: "Bem-vindo a bordo! Sua conta foi criada com sucesso."
            })

        } catch (error: any) {

            const message = error.response.data.message
            toast({
                title: "Ops! Algo deu errado!",
                description: Array.isArray(message) ? message[0] : message,
                variant: "destructive"
            })
        }
    }
    return (
        <main className="h-screen flex justify-center items-center gap-10 px-4">
            <AuthHeroSection />
            <article className="max-w-lg w-full">
                <Image
                    className="mx-auto"
                    alt="Logo"
                    src="/logo-blue.svg"
                    width={350}
                    height={350}
                />
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
                        <Button type="submit">Registrar</Button>
                    </form>
                </Form>
                <Link href="/sign-in" >
                    <h4 className="mt-4 text-center hover:underline transition">Já possuo conta, quero fazer login!</h4>
                </Link>
            </article>
        </main>
    )
}