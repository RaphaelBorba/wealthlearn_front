"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserResponseAPI } from "@/services/User";

interface IFormProfilePage {
  user: UserResponseAPI | undefined
}

export default function FormProfilePage({ user }: IFormProfilePage) {

const transformDateInString = (date: Date | undefined)=>{
  
  if(date === undefined) return ''
  const newDate = new Date(date)

  const day: number = newDate.getUTCDate();
  const month: number = newDate.getUTCMonth() + 1; // Adding 1 because months are zero-based (0 for January)
  const year: number = newDate.getUTCFullYear();
  
  const formattedDay: string = day < 10 ? '0' + day : day.toString();
  const formattedMonth: string = month < 10 ? '0' + month : month.toString();
  
  return `${formattedDay}/${formattedMonth}/${year}`;
  }

  return (
    <div className="mt-5 flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <Label>Nome Usuário:</Label>
        <Input type="text" value={user?.name} disabled />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Email:</Label>
        <Input type="text" value={user?.email} disabled />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Acesso:</Label>
        <Input type="text" value={user?.user_access_id === 1 ? "Administrador" : "Desbravador"} disabled />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Conta Criada:</Label>
        <Input type="text" value={transformDateInString(user?.created_at)} disabled />
      </div>
    </div>
  )
}