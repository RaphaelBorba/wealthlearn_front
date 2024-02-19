"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Dispatch, SetStateAction, useState } from "react"
import { CalculatorResponse } from "@/types/calculators"
import { CurrencyInput } from "react-currency-mask"


const formZodSchema = z.object({
  amount: z.number().min(1, "Número deve ser maior que 1!").max(1000000000, "Número deve ser menor que 1000000000"),
  monthValue: z.number().min(1, "Número deve ser maior que 1").max(10000000, "Número deve ser menor que 10000000"),
  tax: z.number().min(0.1, "Número deve ser maior que 0.1!").max(100, "Número deve ser menor que 100"),
  time: z.number().min(1, "Número deve ser maior que 1").max(2000, "Número deve ser menor que 2000"),
})

type TFormZodSchema = z.infer<typeof formZodSchema>

interface IProps {
  setCalculatorResponse: Dispatch<SetStateAction<CalculatorResponse | null>>
}

export default function CompostTaxCalculator({ setCalculatorResponse }: IProps) {

  const [typeTime, setTypeTime] = useState<'year' | 'month'>("year")
  const [typeTax, setTypeTax] = useState<'year' | 'month'>("year")
  const [isDisable, setIsDisable] = useState<boolean>(false)
  const form = useForm<TFormZodSchema>({
    resolver: zodResolver(formZodSchema),
  })

  async function onSubmit(form: TFormZodSchema) {
    setIsDisable(true)
    const data = { ...form, typeTax, typeTime }
    console.log(data)
    //const response = await postCalculatorSimpleTax(data)
    //setCalculatorResponse(response)
    setIsDisable(false)
  }

  function resetForm() {
    form.reset({ amount: NaN, tax: NaN, time: NaN, monthValue: NaN })
    setCalculatorResponse(null)
  }
  return (
    <Form {...form}>
      <form className="flex flex-col md:px-12 max-w-5xl mx-auto" onSubmit={form.handleSubmit(onSubmit)}>
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
                      InputElement={<Input type="text" placeholder="R$1000,00" />}
                      {...field}
                      onChangeValue={(e, orig, mask) => field.onChange(Number(orig))} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="monthValue"
              render={({ field }) => (
                <FormItem className="w-full min-[600px]:w-96">
                  <FormLabel>Valor Mensal:</FormLabel>
                  <FormControl>
                    <CurrencyInput
                      InputElement={<Input type="text" placeholder="R$1000,00" />}
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
                  <FormLabel>Taxa de Juros:</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-1">
                      <span className="text-lg bg-secondary min-w-8 py-1 flex justify-center items-center rounded-md">%</span>
                      <CurrencyInput
                        hideSymbol
                        InputElement={<Input type="text" placeholder="12,50%" />}
                        {...field}
                        onChangeValue={(e, orig, mask) => field.onChange(Number(orig))} />
                      <Select onValueChange={(e: 'year' | 'month') => setTypeTax(e)} defaultValue={typeTax}>
                        <SelectTrigger className="w-[120px] focus-visible:ring-transparent">
                          <SelectValue placeholder="Time" />
                        </SelectTrigger>
                        <SelectContent className="mr-8">
                          <SelectItem value="year">Anual</SelectItem>
                          <SelectItem value="month">Mensal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="w-full min-[600px]:w-96">
                  <FormLabel>Período:</FormLabel>
                  <FormControl>
                    <div className="flex flex-row">
                      <Input
                        disabled={isDisable}
                        type="number"
                        className="outline-none"
                        placeholder="10"
                        {...field}
                        onChange={event => field.onChange(+event.target.value)}
                      />
                      <Select onValueChange={(e: 'year' | 'month') => setTypeTime(e)} defaultValue={typeTime}>
                        <SelectTrigger className="w-[120px] focus-visible:ring-transparent">
                          <SelectValue placeholder="Time" />
                        </SelectTrigger>
                        <SelectContent className="mr-8">
                          <SelectItem value="year">Ano</SelectItem>
                          <SelectItem value="month">Mês</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="w-full flex flex-col min-[600px]:flex-row justify-end gap-5 min-[600px]:gap-10 mt-[90px]">
          <Button disabled={isDisable} className="w-full min-[600px]:w-36" type="submit">CALCULAR</Button>
          <Button
            type="reset"
            className="w-full min-[600px]:w-36"
            onClick={resetForm}
            variant="secondary">LIMPAR</Button>
        </div>
      </form>
    </Form>
  )
}