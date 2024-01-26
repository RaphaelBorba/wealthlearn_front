import { SignUpForm } from "@/types/signUpForm";
import api from "../api";


export async function createNewUser(body: SignUpForm) {

    const response = await api.post("/auth/register", {...body, user_access_id:2})
    console.log(response)
    return response

}