"use client"
import { userStore } from "@/stores/userStore";
import { useTheme } from "next-themes";

export default function Home() {

  const {setTheme} = useTheme()
  
  return (
    
    <main className="bg-background w-screen h-screen flex justify-center items-center">
      
    <h1 onClick={()=>setTheme("dark")}>asdasd</h1>

    <h1 onClick={()=>setTheme("light")}>asdasd</h1>
      
    </main>
  );
}
