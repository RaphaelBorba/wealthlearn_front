import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import jwt from 'jsonwebtoken'
import { decodedJWT } from "@/types/decodedJWT"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function validateJWTToken(token:string):Promise<decodedJWT>{
  let jwtDecoded

  jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET!, (err, decoded) =>{

    if(err){
      throw new Error("Erro ao validar JWT")
    }else{
      jwtDecoded = decoded
    }
  })

  if(jwtDecoded === undefined) throw new Error("Erro ao validar JWT")

  return jwtDecoded
}