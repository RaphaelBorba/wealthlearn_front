"use client"
import { userStore } from "@/stores/userStore"

export default function MainPage(){

    const {userData} = userStore()
    console.log(userData)
    return(
        <main className="wrapper">
            
        </main>
    )
}