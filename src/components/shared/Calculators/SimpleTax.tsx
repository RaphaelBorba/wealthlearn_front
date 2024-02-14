"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


const formZodSchema = z.object({
  amount: z.coerce.number() ,
  tax: z.coerce.number(),
  timeMonth: z.coerce.number()
})

type TFormZodSchema = z.infer<typeof formZodSchema>

export default function SimpleTaxCalculator() {

  const form = useForm<TFormZodSchema>({
    resolver: zodResolver(formZodSchema),
  })

  function onSubmit(data: TFormZodSchema) {
    console.log(data)
    return
  }

  const handleChange = (value:string) => {
    const formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, '$1,');
    return formattedValue;
  }

  return (


    <Form {...form}>
      <form className="flex flex-col md:px-12 max-w-5xl mx-auto" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex min-[600px]:flex-row flex-col justify-between gap-5 w-full">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="w-full min-[600px]:w-96">
                <FormLabel>Valor Inicial:</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="outline-none"
                    placeholder="R$1000,00"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tax"
            render={({ field }) => (
              <FormItem className="w-full min-[600px]:w-96">
                <FormLabel>Taxa de Juros:</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="outline-none"
                    placeholder="12%"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeMonth"
            render={({ field }) => (
              <FormItem className="w-full min-[600px]:w-96">
                <FormLabel>Período:</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="outline-none"
                    placeholder="10 meses"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full flex flex-col min-[600px]:flex-row justify-end gap-10 mt-10">
          <Button className="w-full min-[600px]:w-36" type="submit">CALCULAR</Button>
          <Button className="w-full min-[600px]:w-36" onClick={()=>form.reset()} variant="secondary">LIMPAR</Button>
        </div>
      </form>
    </Form>

  )
}