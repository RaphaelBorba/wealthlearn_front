import jwt from 'jsonwebtoken'
import { decodedJWT } from "@/types/decodedJWT"
import { toast } from '@/components/ui/use-toast'

const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFwaGFlbCIsImlkIjoyLCJhY2Nlc3MiOjEsImlhdCI6MTcwNTYxNjkzOCwiZXhwIjoxNzA2MjIxNzM4fQ.b9ZaJdmKyBvzRrIzVlFs9KQYE5iQKUyhuPMhidIo1jA"

export async function validateJWTToken(token:string):Promise<decodedJWT>{
    let jwtDecoded

    jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET!, (err, decoded) =>{
    
      if(err){
        toast({
          title:"Sessão expirada!",
          description:"Token JWT passou da validade!",
          variant:"destructive"
        })
        throw {response:{data:{httpResponse: 401, message:"Sessão inspirada!"}}}
    
      }else{
        jwtDecoded = decoded
      }
    })
    if(jwtDecoded === undefined) throw {response:{data:{httpResponse: 401, message:"Sessão inspirada!"}}}
    return jwtDecoded
  }