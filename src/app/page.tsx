"use client"
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {

  const {setTheme} = useTheme()
  return (
    
    <main className="bg-background w-screen h-screen flex justify-center items-center">
      
    <h1 onClick={()=>setTheme("dark")}>asdasd</h1>

    <h1 onClick={()=>setTheme("light")}>asdasd</h1>
      
    </main>
  );
}
