"use client"
import FormProfilePage from "@/components/shared/ProfilePage/FormProfilePage"
import { UserResponseAPI, getUserData } from "@/services/User"
import { userStore } from "@/stores/userStore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"



export default function PerfilPage() {

  const router = useRouter()
  const { userData: { token, id } } = userStore()
  const [user, setUser] = useState<undefined | UserResponseAPI>(undefined)

  useEffect(()=>{

    async function userDataAPI(){
      if(id === 0) return router.push("/")
      const userData = await getUserData(token, id)
      setUser(userData.data)
    }

    userDataAPI()

  },[id, token, router])



  return (
    <main className="wrapper">
      <div className="mt-8 w-[500px]">

        <h1 className="text-3xl">Dados Usuário:</h1>
      <FormProfilePage user={user}/>
      </div>
    </main>
  )
}