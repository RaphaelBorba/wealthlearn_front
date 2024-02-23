import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { calcularTaxaJurosMensal } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyInput } from "react-currency-mask";
import { useForm } from "react-hook-form";
import z from "zod";

const formZodSchema = z.object({
  tax: z.number().min(1, "Juros tem que ser maior que 1").max(150, "Juros tem que ser menor que 150"),
  amount: z.number().min(1, "Valor inicial deve ser maior que 1").max(1000000000, "Valor inicial dever ser menor que 1000000000"),
  goal: z.number().min(1),
  taxMonth: z.number()
})

type TFormZodSchema = z.infer<typeof formZodSchema>

export default function FinancialGoalCalculator() {

  const form = useForm<TFormZodSchema>({
    resolver: zodResolver(formZodSchema)
  })

  function onSubmit(data: TFormZodSchema) {
    console.log(data)
  }

  function resetForm(){

    form.reset({taxMonth:0})
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-between gap-5 w-full">
            <div className="flex flex-col min-[600px]:flex-row justify-around gap-5">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="w-full min-[600px]:w-96">
                    <FormLabel>Valor Inicial:</FormLabel>
                    <FormControl>
                      <CurrencyInput
                        InputElement={<Input type="text" placeholder="R$1.000,00" />}
                        {...field}
                        onChangeValue={(e, orig, mask) => field.onChange(Number(orig))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="goal"
                render={({ field }) => (
                  <FormItem className="w-full min-[600px]:w-96">
                    <FormLabel>Valor Desejado:</FormLabel>
                    <FormControl>
                      <CurrencyInput
                        InputElement={<Input type="text" placeholder="R$10.000,00" />}
                        {...field}
                        onChangeValue={(e, orig, mask) => field.onChange(Number(orig))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col min-[600px]:flex-row justify-around gap-5">
              <FormField
                control={form.control}
                name="tax"
                render={({ field }) => (
                  <FormItem className="w-full min-[600px]:w-96">
                    <FormLabel>Rendimento Anual:</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-1">
                        <span className="text-lg bg-secondary min-w-8 py-1 flex justify-center items-center rounded-md">%</span>
                        <CurrencyInput
                          hideSymbol
                          InputElement={<Input type="text" placeholder="15" />}
                          {...field}
                          onChangeValue={(e, orig, mask) => {
                            field.onChange(Number(orig))
                            form.setValue("taxMonth", calcularTaxaJurosMensal(Number(orig)))
                          }} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="taxMonth"
                render={({ field }) => (

                  <FormItem className="w-full min-[600px]:w-96">
                    <FormLabel>Rendimento Mensal:</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-1">
                        <span className="text-lg bg-secondary min-w-8 py-1 flex justify-center items-center rounded-md">%</span>
                        <Input
                          placeholder="1"
                          readOnly
                          className="outline-none"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
          </div>
          <div className="w-full flex flex-col min-[600px]:flex-row justify-end gap-5 min-[600px]:gap-10 mt-[90px]">
          <Button  className="w-full min-[600px]:w-36" type="submit">CALCULAR</Button>
          <Button
            type="reset"
            className="w-full min-[600px]:w-36"
            onClick={resetForm}
            variant="secondary">LIMPAR</Button>
        </div>
        </form>
      </Form >
    </>
  )
}