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
import AuthHeroSection from "@/components/shared/AuthHeroSection";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const formZodSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

type SignInType = z.infer<typeof formZodSchema>

export default function SignUpPage() {

  const router = useRouter()
  const form = useForm<SignInType>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(formZodSchema)
  })
  async function onSubmit(data: SignInType) {
    const resultLogin = await login(data)
    if (resultLogin) router.push("/")
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