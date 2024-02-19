import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const RSReal = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});


export function calcularTaxaJurosMensal(taxaJurosAnual:number) {
  const taxaAnualDecimal = taxaJurosAnual / 100;
  const taxaJurosMensal = Math.pow(1 + taxaAnualDecimal, 1 / 12) - 1;
  const taxaJurosMensalArredondada = taxaJurosMensal.toFixed(4);

  return parseFloat(taxaJurosMensalArredondada) * 100
}

export function calcularTaxaJurosAnual(taxaJurosMensal:number) {
  const taxaMensalDecimal = taxaJurosMensal / 100;
  const taxaJurosAnual = (Math.pow(1 + taxaMensalDecimal, 12) - 1) * 100;
  return Number(taxaJurosAnual.toFixed(2));
}