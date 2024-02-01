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
import { login } from "@/services/Auth/authService";
import { useToast } from "@/components/ui/use-toast";
import AuthHeroSection from "@/components/shared/AuthHeroSection";
import Link from "next/link";
import { validateJWTToken } from "@/lib/utils";
import { userStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";

const formZodSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

type SignInType = z.infer<typeof formZodSchema>

export default function SignUpPage() {

    const router = useRouter()
    const { toast } = useToast()
    const form = useForm<SignInType>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: zodResolver(formZodSchema)
    })

    const {setUserData} = userStore()
    const onSubmit = async (data: SignInType) => {
        try {

            const response = await login(data)
            const token = response.data
            const {access, id, name} = await validateJWTToken(token)
            setUserData({access, id, name, token})
            router.push("/")



        } catch (error: any) {
            console.log(error)
            const message = error.response.data.message
            toast({
                title: "Ops! Algo deu errado!",
                description: Array.isArray(message) ? message[0] : message,
                variant: "destructive"
            })
        }
    }
    return (
        <main className="h-screen flex justify-center items-center gap-10">
            <AuthHeroSection />
            <article className="max-w-lg w-full">
                <h1 className="text-center">LOGO</h1>
                <Form {...form}>
                    <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(onSubmit)}>
                        {/* EMAIL */}
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
                        {/* PASSWORD */}
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
                        <Button type="submit">Login</Button>
                    </form>
                </Form>
                <Link href="/sign-up" >
                    <h4 className="mt-4 text-center hover:underline transition">Pronto para começar? Crie sua conta!</h4>
                </Link>
            </article>
        </main>
    )
}